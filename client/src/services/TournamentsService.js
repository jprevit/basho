import { AppState } from "../AppState.js"
import { Tournament } from "../models/Tournament.js"
import { sumoApi } from "./AxiosService.js"


class TournamentsService{
    async getBashoById(){
        const datesResponse = await sumoApi.get('/bashoIds')
        // console.log("the dates 📅", datesResponse.data)
        const bashoDateIndex = Math.floor(Math.random() * datesResponse.data.length)
        // console.log(datesResponse.data[bashoDateIndex])

        const randomBasho = await sumoApi.get(`basho/${datesResponse.data[bashoDateIndex]}/banzuke/Makuuchi`)
        console.log(randomBasho)

        const activeBasho = new Tournament(randomBasho.data)
        AppState.activeTournament = activeBasho
        console.log(AppState.activeTournament)
    }
}

export const tournamentsService = new TournamentsService