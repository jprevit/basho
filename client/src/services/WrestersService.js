import { logger } from "../utils/Logger.js"
import { api, sumoApi } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Wrestler } from "../models/Wrestler.js"
import { StableMember } from "../models/StableMember.js"
import { TournamentWrestler } from "../models/TournamentWrestler.js"


class WrestlersService {

    // async getAllWrestlers() {
    //     const response = await sumoApi.get('/rikishis')
    //     console.log('rakishis from client', response)
    // }

    // draftStable() {
    //     logger.log("Getting Active Stable Members", AppState.tournamentWrestlers)
    //     this.getRandomWrestler()
    // }


    async getRandomWrestler() {
        AppState.activeStableWrestlers = []
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

        // await this.updateLeagueDraftTurn()

    }

    async addWrestlerToStable(wrestlerData) {
        const response = await api.post('api/stablemembers', { leagueId: AppState.activeLeague.id, wrestlerId: wrestlerData.rikishiID })

        const wrestler = new StableMember(response.data)

        AppState.activeStableWrestlers.push(wrestler)

    }


    async updateLeagueDraftTurn() {
        AppState.activeStableWrestlers = []
        const activeLeague = AppState.activeLeague

        if (activeLeague.turn < activeLeague.players.length) activeLeague.turn++

        console.log(activeLeague.turn)

        await api.put(`api/leagues/${AppState.activeLeague.id}/turn`, { turn: activeLeague.turn })
    }


}
export const wrestlersService = new WrestlersService