import { logger } from "../utils/Logger.js"
import { sumoApi } from "./AxiosService.js"
import { AppState } from "../AppState.js"


class WrestlersService {

    async getAllWrestlers() {
        const response = await sumoApi.get('/rikishis')
        //console.log('rakishis from client', response)
    }


    async getWrestlerById() {
        const wrestlerResponse = await sumoApi.get(`/rikishis`)
        logger.log("Getting Wrestler By Id", wrestlerResponse.data)
        const wrestlerToIndex = Math.floor(Math.random() * wrestlerResponse.data.records.length)
        logger.log(wrestlerResponse.data.records[wrestlerToIndex])
        // const randomWrestler = await sumoApi.get(`rikishi/${wrestlerResponse.data[wrestlerToIndex]}`)
        // logger.log("Getting Random Wrestler", randomWrestler)
    }

    draftStable() {
        const eastWrestlers = AppState.activeTournament.eastWrestlers
        const westWrestlers = AppState.activeTournament.westWrestlers
        const tournamentWrestlers = []
        tournamentWrestlers.push(...eastWrestlers, ...westWrestlers)
        AppState.tournamentWrestlers = tournamentWrestlers
        logger.log("Getting Active Stable Members", AppState.tournamentWrestlers)
    }


    getRandomWrestler(){
        const wrestlerToIndex = Math.floor(Math.random() * AppState.tournamentWrestlers.length)
        const randomWrestler = AppState.tournamentWrestlers[wrestlerToIndex]
        logger.log(randomWrestler)
    }
addToStable(){
    for (let i = 0; i < 5; i++) {

      
        const element = array[i];
        
    }
    if (AppState.activeStableWrestlers.length < 5){
    const stableWrestlers = []
    
    }
}


}

export const wrestlersService = new WrestlersService