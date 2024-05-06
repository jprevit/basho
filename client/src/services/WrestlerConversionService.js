/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { League } from "../models/League.js"
import { Tournament } from "../models/Tournament.js"
import { WrestlerPool } from "../models/WrestlerPool.js"
import { router } from "../router.js"
import { logger } from "../utils/Logger.js"
import { api, sumoApi } from "./AxiosService.js"
import { tournamentsService } from "./TournamentsService.js"




class WrestlerConversionService {
  // async createNewPool(poolData) {
  //   await tournamentsService.getBashoById()
  //   poolData.tournamentId = AppState.activeTournament.bashoId
  //   const response = await api.post(`api/pools`, poolData)
  //   console.log('🦒', response.data);
  //   const newPool = new Pool(response.data)

    
    

  
  // }





  async getBashoById(bashoId) {
    const response = await sumoApi.get(`basho/:bashoId/banzuke/Makuuchi`)
    console.log('found basho', bashoId);
    const foundBasho = new Tournament(response.data)
    console.log(foundBasho);
  }

}


export const wrestlerConversionService = new WrestlerConversionService