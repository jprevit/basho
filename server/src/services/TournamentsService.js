import { dbContext } from "../db/DbContext.js"



class TournamentsService {
    async getBashoById(bashoId) {
        const basho = await dbContext.Tournament.findOne({ bashoId: bashoId })
        if (!basho) throw new Error(`no basho found with id ${bashoId}`)
        return basho
    }
    async getAllBashoDates() {
        const dates = await dbContext.TournamentDates.find()
        return dates
    }

}

export const tournamentsService = new TournamentsService