/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { League } from "../models/League.js"
import { StableMember } from "../models/StableMember.js"
import { Tournament } from "../models/Tournament.js"
import { TournamentWrestler } from "../models/TournamentWrestler.js"
import { logger } from "../utils/Logger.js"
import { api, sumoApi } from "./AxiosService.js"
import { leaguesService } from "./LeaguesService.js"


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
        const tournaments = allTournaments.data.map(tournament => new Tournament(tournament))
        AppState.allTournaments = tournaments
    }
    async getBashoById() {
        const datesResponse = await sumoApi.get('bashoIds')

        const bashoDateIndex = Math.floor(Math.random() * this.availableDates.length)

        const randomBasho = await sumoApi.get(`basho/${datesResponse.data[bashoDateIndex]}/banzuke/Makuuchi`)

        const activeBasho = new Tournament(randomBasho.data)
        const dbBasho = await api.post(`api/tournaments`, activeBasho)

        AppState.activeTournament = activeBasho
        AppState.allTournaments.push(activeBasho)

        return activeBasho
    }

    async getTournamentByTournamentId(tournamentId) {
        // const currentLeagueResult = await leaguesService.getLeagueById(AppState.activeLeague.id)
        const currentLeagueResult = AppState.activeLeague
        // const currentLeague = new League(currentLeagueResult.data)
        // console.log(currentLeague, "current league info")
        if (currentLeagueResult.tournamentWrestlers.length > 0) {
            this.getLeagueRemainingWrestlers()
            return
        }

        const response = await sumoApi.get(`basho/${tournamentId}/banzuke/Makuuchi`)

        const tournament = new Tournament(response.data)

        AppState.activeTournament = tournament

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

        const tournamentWrestlers = combinedWrestlers.map(wrestler => new TournamentWrestler(wrestler))

        AppState.tournamentWrestlers = tournamentWrestlers
        console.log('tournament wrestlers', AppState.tournamentWrestlers)

        await api.put(`api/leagues/${AppState.activeLeague.id}/leaguewrestlers`, tournamentWrestlers)
        AppState.activeLeague.tournamentWrestlers = tournamentWrestlers

        console.log("Added base set of wrestlers to league", tournamentWrestlers)
    }

    async getLeagueRemainingWrestlers() {
        
        if(!AppState.activeLeague){
            const  currentLeagueResult = await leaguesService.getLeagueById(AppState.activeLeague.id)
            const remainingTournamentWrestlers = currentLeagueResult.data.tournamentWrestlers.map(wrestler => new TournamentWrestler(wrestler))
            AppState.tournamentWrestlers = remainingTournamentWrestlers
        }else{
            const  currentLeagueResult = AppState.activeLeague
            const remainingTournamentWrestlers = currentLeagueResult.tournamentWrestlers
            AppState.tournamentWrestlers = remainingTournamentWrestlers
        }
        
        
        
    }

    async getStableById(profileId) {
        AppState.myStable = []
        const leagueId = AppState.activeLeague.id
        logger.log('service attempting to get stable')
        const response = await api.get(`api/stablemembers/${profileId}/profile` ,leagueId)
        logger.log('service getstablebyId', response.data)
        const stable = response.data.map(stablemember => new StableMember(stablemember))
        AppState.myStable = stable
        return stable
    }

    /** This function looks through the active wrestlers in the AppState, finds a matching object in the wrestlerImgIds object in the AppState, and then builds an img URL to sumo.or.jp based on this data and attatches it to the respective player in the AppState. If there is no image, a placeholder is attatched. These images will be used to draw wrestler images to page elements
     * Urls pulled from: https://www.sumo.or.jp/EnSumoDataRikishi/profile/3622/
     * 
     * Authors: Khile, Isaiah
     */
    async assignWrestlerPictures() {
        let appStateCopy = []
        const tournamentWrestlers = AppState.tournamentWrestlers
        tournamentWrestlers.forEach(wrestler => {
            appStateCopy.push(wrestler)
        });

        const wrestlerImageIds = AppState.wrestlerImageIds

        for (let i = 0; i < tournamentWrestlers.length; i++) {
            let wrestlerName = tournamentWrestlers[i].shikonaEn
            const foundWrestler = wrestlerImageIds.find(wrestler => wrestler.sumoName == wrestlerName)
            let urlString = `${AppState.imgBaseUrl}${foundWrestler.pictureId}.jpg`
            if (foundWrestler.hasPicture == false) {
                urlString = `src/assets/img/sumo-not-found.png`
            }

            appStateCopy[i].imgUrl = urlString
        }
        appStateCopy = appStateCopy.map(wrestler => new TournamentWrestler(wrestler))
        AppState.tournamentWrestlers = appStateCopy
        // console.log('AppState has imageUrls now', AppState.tournamentWrestlers)
    }

    async setStableWrestlers(playerId) {
        // console.log('player id', playerId)
        const response = await api.get(`api/stablemembers/${AppState.activeLeague.id}`)
        console.log('stableMembers here:', response.data)
    }
}

export const tournamentsService = new TournamentsService