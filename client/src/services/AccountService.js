/* eslint-disable no-console */
import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { Player } from "../models/Player.js"
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }


  async getMyPlayers() {
    const response = await api.get(`account/players`)
    console.log('my account players', response.data);
    const players = response.data.map(player => new Player(player))
    AppState.myPlayers = players
    console.log("account players in AppState", AppState.myPlayers);
// this.getMyLeagues(players)
  }

// async getMyLeagues(players){
//   const leagues = AppState.leagues
//   players.forEach(player => {
//     const playerLeagues = leagues.filter(league => league.players.includes(player))
// console.log('player leagues', playerLeagues);
// AppState.myLeagues = playerLeagues
// console.log('account leagues in AppState', AppState.myLeagues);
//   })
// }


}

export const accountService = new AccountService()
