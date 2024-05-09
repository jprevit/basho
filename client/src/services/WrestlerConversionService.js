/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { League } from "../models/League.js"
import { Tournament } from "../models/Tournament.js"
import { WrestlerPool } from "../models/WrestlerPool.js"
import { router } from "../router.js"
import { logger } from "../utils/Logger.js"
import { api, sumoApi } from "./AxiosService.js"
import { tournamentsService } from "./TournamentsService.js"


const availableDates = [
  "202403",
  "202401",
  "202311",
  "202309",
  "202307",
  "202305",
  "202303",
  "202301",
  "202211",
  "202209",
  "202207",
  "202205",
  "202203",
  "202201"]

const allWrestlers = []

class WrestlerConversionService {

  /** the problem with this right now is that it repeats the total sequence for each basho date.
   * Some function is out of order, and needs to be moved to the right spot in order to complete the single list. Revisit this when time allows, but it's not functionally being used. We've got the information we need from it already.
   */
  async uniqueWrestlerLoop() {
    for (let i = 0; i < availableDates.length; i++) {
      const date = availableDates[i];
      await this.getAvailableBashosFromAPI(date)
    }
  }

  async getAvailableBashosFromAPI(bashoId) {

    // console.log('Basho 1',bashoId);
    const response = await sumoApi.get(`basho/${bashoId}/banzuke/Makuuchi`)
    // console.log('found basho', response.data);

    response.data.east.forEach(wrestler => {
      allWrestlers.push({
        id: wrestler.rikishiID,
        name: wrestler.shikonaEn
      })
    }),
      response.data.west.forEach(wrestler => {
        allWrestlers.push({
          id: wrestler.rikishiID,
          name: wrestler.shikonaEn
        })
      })

    this.filterWrestlers(allWrestlers)
  }

  filterWrestlers(allWrestlers) {
    const uniqueWrestlers = []
    allWrestlers.forEach(wrestler => {
      if (!uniqueWrestlers.includes(wrestler)) {
        uniqueWrestlers.push(wrestler)
      }
    })
  }
}


export const wrestlerConversionService = new WrestlerConversionService