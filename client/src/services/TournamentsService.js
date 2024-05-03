import { AppState } from "../AppState.js"
import { Tournament } from "../models/Tournament.js"
import { sumoApi } from "./AxiosService.js"


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

    async getBashoById(){
        const datesResponse = await sumoApi.get('/bashoIds')
        // console.log("the dates 📅", datesResponse.data)
        const bashoDateIndex = Math.floor(Math.random() * this.availableDates.length)
        // console.log(datesResponse.data[bashoDateIndex])

        const randomBasho = await sumoApi.get(`basho/${datesResponse.data[bashoDateIndex]}/banzuke/Makuuchi`)
        console.log(randomBasho)

        const activeBasho = new Tournament(randomBasho.data)
        AppState.activeTournament = activeBasho
        console.log('Active Tournament from tournaments service', AppState.activeTournament)
        return activeBasho
    }
}

export const tournamentsService = new TournamentsService