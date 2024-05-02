import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"




class LeaguesService{
  async createNewLeague() {
    const response = await api.post('api/leagues')
    logger.log('Creating new league', response)
  }

}


export const leaguesService = new LeaguesService