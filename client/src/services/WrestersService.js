import { logger } from "../utils/Logger.js"
import { api, sumoApi } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Wrestler } from "../models/Wrestler.js"
import { StableMember } from "../models/StableMember.js"


class WrestlersService {

    async getAllWrestlers() {
        const response = await sumoApi.get('/rikishis')
        console.log('rakishis from client', response)
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
        // const eastWrestlers = AppState.activeTournament.eastWrestlers
        // const westWrestlers = AppState.activeTournament.westWrestlers
        // const tournamentWrestlers = []
        // tournamentWrestlers.push(...eastWrestlers, ...westWrestlers)
        // AppState.tournamentWrestlers = tournamentWrestlers
        logger.log("Getting Active Stable Members", AppState.tournamentWrestlers)
        this.getRandomWrestler()
    }


    async getRandomWrestler() {
        console.log('active wrestlers', AppState.activeLeague);
        for (let i = 0; i < 5; i++) {
            const wrestlerToIndex = Math.floor(Math.random() * AppState.activeLeague.tournamentWrestlers.length)
            console.log(wrestlerToIndex, "random wrestler number")
            const randomWrestler = AppState.activeLeague.tournamentWrestlers[wrestlerToIndex]
            AppState.activeLeague.tournamentWrestlers.splice(wrestlerToIndex, 1)

            logger.log('Tournament Wrestlers', AppState.activeLeague.tournamentWrestlers.length)
            logger.log('Random  Wrestler', randomWrestler)

            await this.addWrestlerToStable(randomWrestler)

        }
        const tournamentWrestlers = AppState.activeLeague.tournamentWrestlers
        await api.put(`api/leagues/${AppState.activeLeague.id}/leaguewrestlers`, tournamentWrestlers)
        logger.log('Stable', AppState.activeStableWrestlers)

        await this.updateLeagueDraftTurn()

    }

    async addWrestlerToStable(wrestlerData) {
        // console.log("league id: ", AppState.activeLeague.id, " wrestler Id: ", wrestlerData.rikishiID)
        const response = await api.post('api/stablemembers', { leagueId: AppState.activeLeague.id, wrestlerId: wrestlerData.rikishiID })
        //logger.log(`Adding ${wrestlerData.name} to Stable`)
        const wrestler = new StableMember(response.data)

        AppState.activeStableWrestlers.push(wrestler)

    }


    async updateLeagueDraftTurn() {
        const activeLeague = AppState.activeLeague

        if (activeLeague.turn < activeLeague.players.length) activeLeague.turn++

        console.log(activeLeague.turn)

        await api.put(`api/leages/${AppState.activeLeague.id}/turn`, activeLeague.turn)
    }


}
export const wrestlersService = new WrestlersService