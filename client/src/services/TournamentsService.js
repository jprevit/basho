/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { Tournament } from "../models/Tournament.js"
import { TournamentWrestler } from "../models/TournamentWrestler.js"
import { logger } from "../utils/Logger.js"
import { api, sumoApi } from "./AxiosService.js"


class TournamentsService {

    availableDates = [
        "202403",
        "202401",
        "202311",
        "202309",
        "202307",
        "202305",
        "202303",
        "202301",
        "202211",
        "202209",
        "202207",
        "202205",
        "202203",
        "202201"]

    async populateAllTournaments() {
        const allTournaments = await api.get('api/tournaments')
        console.log('all tournaments', allTournaments.data);
        const tournaments = allTournaments.data.map(tournament => new Tournament(tournament))
        AppState.allTournaments = tournaments
        console.log('all tournaments in appstate', AppState.allTournaments);
    }
    async getBashoById() {
        const datesResponse = await sumoApi.get('bashoIds')
        // console.log("the dates 📅", datesResponse.data)
        const bashoDateIndex = Math.floor(Math.random() * this.availableDates.length)
        // console.log(datesResponse.data[bashoDateIndex])

        const randomBasho = await sumoApi.get(`basho/${datesResponse.data[bashoDateIndex]}/banzuke/Makuuchi`)
        console.log(randomBasho.data)

        const activeBasho = new Tournament(randomBasho.data)
        const dbBasho = await api.post(`api/tournaments`, activeBasho)
        console.log('dbBasho', dbBasho)
        AppState.activeTournament = activeBasho
        AppState.allTournaments.push(activeBasho)
        console.log('Active Tournament from tournaments service', AppState.activeTournament)
        console.log('All Tournaments from tournaments service', AppState.allTournaments)
        return activeBasho
    }


    // async getTournamentById(){
    //     const newTournament = 
    // }

    async getTournamentByTournamentId(tournamentId) {
        const response = await sumoApi.get(`basho/${tournamentId}/banzuke/Makuuchi`)
        logger.log("Getting Tournament By Tournament Id")
        const tournament = new Tournament(response.data)
        logger.log(tournament)
        AppState.activeTournament = tournament
        logger.log(AppState.activeTournament)
        this.mapTournamentWrestlers()
    }

    async mapTournamentWrestlers() {
        const combinedWrestlers = []
        const westWrestlers = AppState.activeTournament.westWrestlers
        const eastWrestlers = AppState.activeTournament.eastWrestlers
        westWrestlers.forEach(wrestler => {
            combinedWrestlers.push(wrestler)
        });
        eastWrestlers.forEach(wrestler => {
            combinedWrestlers.push(wrestler)
        });
        logger.log('combined Wrastlers', combinedWrestlers)
        const tournamentWrestlers = combinedWrestlers.map(wrestler => new TournamentWrestler(wrestler))
        AppState.tournamentWrestlers = tournamentWrestlers

        // AppState.tournamentWrestlers.push(westWrestlers, eastWrestlers)
        // const tournamentWrestlers = westWrestlers.map(wrestler => new TournamentWrestler(wrestler))
        logger.log("Combining  Wrestlers", AppState.tournamentWrestlers)
        console.log('wrestler stats',AppState.allWrestlers)
    }

    async getMyStable(){
        const playerId = AppState.account.id
        const leagueId = AppState.activeLeague.id
        const activeTournament = AppState.activeTournament
    }

 
    async assignWrestlerPictures(){
        let appStateCopy = []
        const tournamentWrestlers = AppState.tournamentWrestlers
        tournamentWrestlers.forEach(wrestler => {
            appStateCopy.push(wrestler)
        });
        // console.log(`appstate copy`,appStateCopy)
        const wrestlerImageIds = AppState.wrestlerImageIds
        // console.log('start of assigning pictures', tournamentWrestlers)
        for(let i = 0; i < tournamentWrestlers.length; i ++){
            let wrestlerName = tournamentWrestlers[i].shikonaEn
            const foundWrestler = wrestlerImageIds.find(wrestler => wrestler.sumoName == wrestlerName)
            const urlString = `${AppState.imgBaseUrl}${foundWrestler.pictureId}.jpg`
            // console.log(`${i}tournament:${tournamentWrestlers[i].shikonaEn} pictureObj:${foundWrestler.sumoName} Img: ${urlString}`)
            appStateCopy[i].imgUrl = urlString
        }
        appStateCopy = appStateCopy.map(wrestler => new TournamentWrestler(wrestler))
        AppState.tournamentWrestlers = appStateCopy
        console.log('AppState has imageUrls now', AppState.tournamentWrestlers)
    }
}

export const tournamentsService = new TournamentsService