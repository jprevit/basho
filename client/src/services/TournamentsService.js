/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { Tournament } from "../models/Tournament.js"
import { api, sumoApi } from "./AxiosService.js"


class TournamentsService{

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
    async getBashoById(){
        const datesResponse = await sumoApi.get('bashoIds')
        // console.log("the dates 📅", datesResponse.data)
        const bashoDateIndex = Math.floor(Math.random() * this.availableDates.length)
        // console.log(datesResponse.data[bashoDateIndex])

        const randomBasho = await sumoApi.get(`basho/${datesResponse.data[bashoDateIndex]}/banzuke/Makuuchi`)
        console.log(randomBasho.data)

        const activeBasho = new Tournament(randomBasho.data)
        const dbBasho = await api.post(`api/tournaments`, activeBasho)
        console.log('dbBasho',dbBasho)
        AppState.activeTournament = activeBasho
        AppState.allTournaments.push(activeBasho)
        console.log('Active Tournament from tournaments service', AppState.activeTournament)
        console.log('All Tournaments from tournaments service', AppState.allTournaments)
        return activeBasho
    }


    // async getTournamentById(){
    //     const newTournament = 
    // }


}

export const tournamentsService = new TournamentsService