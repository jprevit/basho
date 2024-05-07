/* eslint-disable no-console */
import { createApp } from "vue"
import App from "../App.vue"
import { AppState } from "../AppState.js"
import { League } from "../models/League.js"
import { router } from "../router.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { tournamentsService } from "./TournamentsService.js"
import { Player } from "../models/Player.js"
import { Account } from "../models/Account.js"




class LeaguesService {

  async getMyLeagues(account) {
    
    const response = await api.get('api/leagues/')
    console.log('players', response.data);
    
    const accountLeagues = response.data.filter((league) => league.players.includes(account.id) )
console.log('thisleague', accountLeagues);
    /**!SECTIONconst inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries"); */
  }
  async createNewLeague(leagueData) {
    await tournamentsService.getBashoById()
    leagueData.tournamentId = AppState.activeTournament.bashoId
    const response = await api.post(`api/leagues`, leagueData)

    console.log("league posted")

    const newLeague = new League(response.data)
    AppState.leagues.push(newLeague)
    AppState.activeLeague = newLeague

    //console.log("set league in app state")
    await this.createPlayer(AppState.activeLeague.id)
    console.log("created league id", AppState.activeLeague.id)
    router.push({ name: 'ActiveLeague', params: { leagueId: AppState.activeLeague.id } })
    //console.log('league created', newLeague);

    console.log("finished creating league", AppState.activeLeague)
  }

  async getLeagueById(leagueId) {
    const response = await api.get(`api/leagues/${leagueId}`)
    // console.log('found league', response.data);
    return response
  }

  async joinLeagueById(leagueId){
    console.log('join league form info',leagueId)
    const response = await this.getLeagueById(leagueId)

    await this.createPlayer(leagueId)

    AppState.activeLeague = new League(response.data)

    console.log("joined league ", leagueId)
    router.push(`activeLeague/${leagueId}`)
    return response
  }

  async createPlayer(leagueToJoin){
    const response =  await api.post(`api/players/${leagueToJoin}`, {leagueId : leagueToJoin})
    const player = new Player(response.data)
    AppState.activePlayers.push(player)
    console.log("created player")
  }

  async getAllLeagues() {
    const response = await api.get('api/leagues')
    console.log('all leagues should be here', response.data)
    return response
  }

  async setActiveLeague(leagueId) {
    const league = await this.getLeagueById(leagueId)
    AppState.activeLeague = league.data
    console.log('appstate active league', AppState.activeLeague)
  }

  // NOTE This is a function for testing purposes. It is attached to a button in the ActiveLeaguePage. All it does is rotate between the available existing states.
  async changeLeagueState(leagueId) {
    logger.log("Current State = ", AppState.activeLeague.state)

    if (AppState.activeLeague.state == 'starting') {
      AppState.activeLeague.state = 'drafting'
    } else if (AppState.activeLeague.state == 'drafting') {
      AppState.activeLeague.state = 'running'
    } else if (AppState.activeLeague.state == 'running') {
      AppState.activeLeague.state = 'ended'
    } else {
      AppState.activeLeague.state = 'starting'
    }

    const response = await api.put(`api/leagues/${leagueId}`, AppState.activeLeague.state)
    console.log(response, " put request data")
    logger.log("New State", AppState.activeLeague.state)
  }

}


export const leaguesService = new LeaguesService