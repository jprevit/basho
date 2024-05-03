import { dbContext } from "../db/DbContext.js"



class TournamentsService {
    async getAllTournaments() {
        const allTournaments = await dbContext.Tournament.find()
        if (!allTournaments) throw new Error(`No tournaments found.`)
        return (allTournaments)
    }
    async getBashoById(bashoId) {
        const basho = await dbContext.Tournament.findOne({ bashoId: bashoId })
        if (!basho) throw new Error(`no basho found with id ${bashoId}`)
        return basho
    }
    async getAllBashoDates() {
        const dates = await dbContext.TournamentDates.find()
        return dates
    }
    async postTournament(tournament) {
        const newTournament = await dbContext.Tournament.create(tournament)
        return newTournament
    }



}

export const tournamentsService = new TournamentsService