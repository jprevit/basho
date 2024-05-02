import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { tournamentsService } from "./TournamentsService.js"




class LeaguesService{
  async createNewLeague(leagueData) {
await tournamentsService.getBashoById()
leagueData.tournamentId = AppState.activeTournament.id
console.log('tournament id', AppState.activeTournament);
    const response = await api.post('api/leagues', leagueData)
    logger.log('Creating new league', response)
    AppState.activeLeague = response.data
    console.log("active league", AppState.activeLeague);
  }

}


export const leaguesService = new LeaguesService