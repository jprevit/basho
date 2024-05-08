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
import { TournamentWrestler } from "../models/TournamentWrestler.js"




class LeaguesService {

  async getMyPlayers() {
    const response = await api.get(`account/players`)

    console.log('my account players', response.data);
    const players = response.data.map(player => new Player(player))
    console.log("account leages in AppState", players);
    AppState.myPlayers = players
  }

  async createNewLeague(leagueData) {
    await tournamentsService.getBashoById()
    leagueData.tournamentId = AppState.activeTournament.bashoId
    const response = await api.post(`api/leagues`, leagueData)

    const newLeague = new League(response.data)
    AppState.leagues.push(newLeague)
    AppState.activeLeague = newLeague

    await this.createPlayer(AppState.activeLeague.id)

    router.push({ name: 'ActiveLeague', params: { leagueId: AppState.activeLeague.id } })
  }

  async getLeagueById(leagueId) {
    const response = await api.get(`api/leagues/${leagueId}`)

    return response
  }

  async joinLeagueById(leagueId) {
    //console.log('join league form info',leagueId)
    const response = await this.getLeagueById(leagueId)

    await this.createPlayer(leagueId)

    AppState.activeLeague = new League(response.data)

    //console.log("joined league ", leagueId)
    router.push(`activeLeague/${leagueId}`)
    return response
  }

  async createPlayer(leagueToJoin) {
    const response = await api.post(`api/players/${leagueToJoin}`, { leagueId: leagueToJoin })
    const player = new Player(response.data)
    AppState.activePlayers.push(player)
    logger.log("Create a new player", AppState.activePlayers)
    //console.log("created player")
  }

  async getAllLeagues() {
    const response = await api.get('api/leagues')
    console.log('all leagues should be here', response.data)
    AppState.leagues = response.data.map(league => new League(league))
    return response.data
  }

  async setActiveLeague(leagueId) {
    const league = await this.getLeagueById(leagueId)
    AppState.activeLeague = new League(league.data)
    const tournamentwrestlers = AppState.activeLeague.tournamentWrestlers.map(wrestler => new TournamentWrestler(wrestler))
    AppState.activeLeague.tournamentWrestlers = tournamentwrestlers
    console.log('active account: ', AppState.user, ' appstate active league', AppState.activeLeague)
  }

  // NOTE This is a function for testing purposes. It is attached to a button in the ActiveLeaguePage. All it does is rotate between the available existing states.
  async changeLeagueState(leagueId) {
    //logger.log("Current State = ", AppState.activeLeague.state)

    if (AppState.activeLeague.state == 'starting') {
      AppState.activeLeague.state = 'drafting'
    } else if (AppState.activeLeague.state == 'drafting') {
      AppState.activeLeague.state = 'running'
    } else if (AppState.activeLeague.state == 'running') {
      AppState.activeLeague.state = 'ended'
    } else {
      AppState.activeLeague.state = 'starting'
    }
    //logger.log("app state", AppState.activeLeague.state)
    const response = await api.put(`api/leagues/${leagueId}`, { state: AppState.activeLeague.state })
    console.log(response, " put request data")
    logger.log("New State", AppState.activeLeague.state)
  }

  async getPlayersByLeagueId(leagueId) {
    const response = await api.get(`api/players/${leagueId}`)
    logger.log("Getting this leagues players", response.data)
    const activePlayers = response.data.map(player => new Player(player))
    console.log('active players', activePlayers)
    AppState.activePlayers = activePlayers
    logger.log(AppState.activePlayers)
  }

  async findLeaguePlayers(leagueId) {
    const response = await api.get(`api/players/${leagueId}`)
    logger.log("Found other players in this league", response.data)
    const activePlayers = response.data.map(player => new Player(player))
    console.log('active players', activePlayers)
  }

  async closeLeague(leagueId) {
    const response = await api.delete(`api/leagues/${leagueId}`)
    console.log('closing league', response.data)
    AppState.activeLeague.isClosed = true
    // FIXME write the rest of this function
  }

}

export const leaguesService = new LeaguesService