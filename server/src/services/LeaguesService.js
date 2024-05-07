import { dbContext } from "../db/DbContext.js"
import { logger } from "../utils/Logger.js"



class LeaguesService {
    async changeLeagueState(leagueId, updatedState) {
        const leagueToUpdate = await this.getLeagueById(leagueId)
        leagueToUpdate.state = updatedState
        await leagueToUpdate.save()
        return leagueToUpdate

    }
    // async addWrestlertoStable(wrestlerId, userId) {
    //     const addedWrestler = await dbContext.StableMembers.create(wrestlerId, userId)
    //     await addedWrestler.populate('player wrestler league')
    // }

    async createNewLeague(leagueData) {
        const newLeague = await dbContext.Leagues.create(leagueData)
        await newLeague.populate('creator tournament')
        return newLeague
    }

    async getAllLeagues() {
        const leagues = await dbContext.Leagues.find().populate('creator tournament', '-email')
        return leagues
    }

    async getLeagueById(leagueId) {
        const league = await dbContext.Leagues.findById(leagueId)
        await league.populate('creator tournament', '-email')
        return league
    }

}

export const leaguesService = new LeaguesService