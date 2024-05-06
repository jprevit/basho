/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { League } from "../models/League.js"
import { router } from "../router.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
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
    const response = await api.get(`/basho/:bashoId/banzuke/Makuuchi`)
    console.log('found basho', bashoId);
    console.log('wrestlers to convert', );
  }

}


export const wrestlerConversionService = new WrestlerConversionService