import { dbContext } from "../db/DbContext.js"



class TournamentsService {
    getBashoById(bashoId) {
        const basho = dbContext.Tournament.findById(bashoId)
        if (!basho) throw new Error(`no basho found with id ${bashoId}`)
        return basho
    }
    async getAllBashoDates() {
        const dates = dbContext.TournamentDates.find()
        return dates
    }

}

export const tournamentsService = new TournamentsService