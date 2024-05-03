/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { League } from "../models/League.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { tournamentsService } from "./TournamentsService.js"




class LeaguesService{
  async createNewLeague(leagueData) {
    // console.log('active 1', AppState.activeTournament);
const bashoResponse = await tournamentsService.getBashoById()
console.log('basho', bashoResponse);
leagueData.tournamentId = bashoResponse.bashoId
console.log('tournament id', AppState.activeTournament);

const response = await api.post('api/leagues', leagueData)
    logger.log('Creating new league', response.data)
const newLeague = new League(response.data)
AppState.leagues.push(newLeague)

console.log('league actually created', AppState.leagues);
AppState.activeLeague=newLeague
console.log('active league', AppState.activeLeague);
// console.log("active league", AppState.activeLeague);
return newLeague
    // AppState.activeLeague = response.data
  }

  async getLeagueById(leagueId){
    const response = await api.get(`api/leagues/${leagueId}`)
    console.log('found league', leagueId);

  }

}


export const leaguesService = new LeaguesService