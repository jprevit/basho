/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { League } from "../models/League.js"
import { router } from "../router.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { tournamentsService } from "./TournamentsService.js"




class LeaguesService {
  async createNewLeague(leagueData) {
    await tournamentsService.getBashoById()
    leagueData.tournamentId = AppState.activeTournament.bashoId
    const response = await api.post(`api/leagues`, leagueData)
    console.log('🦒', response.data);
    const newLeague = new League(response.data)
    AppState.leagues.push(newLeague)
    AppState.activeLeague = newLeague
    console.log('active tourn 1', AppState.activeTournament);
    console.log('new league 2', newLeague);

    router.push({ name: 'ActiveLeague', params: { leagueId: AppState.activeLeague.id } })
    console.log('New league probably created', newLeague);

  }

  async getLeagueById(leagueId) {
    const response = await api.get(`api/leagues/${leagueId}`)
    console.log('found league', response.data);
    return response
  }

  async joinLeagueById(leagueId){
    console.log('join league form info',leagueId)
    const response = await this.getLeagueById(leagueId)
    await api.post(`api/leagues/${leagueId}`, leagueId)
    router.push(`activeLeague/${leagueId}`)
    return response
  }

  async getAllLeagues(){
    const response = await api.get('api/leagues')
    console.log('all leagues should be here',response.data)
    return response
  }

}


export const leaguesService = new LeaguesService