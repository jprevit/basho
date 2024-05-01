import { dbContext } from "../db/DbContext.js"



class LeaguesService {
    async addWrestlertoStable(wrestlerId, userId) {
        const addedWrestler = await dbContext.StableMembers.create(wrestlerId, userId)
        addedWrestler.populate('player wrestler league')
    }
    async createNewLeague(leagueData) {
        const newLeague = await dbContext.Leagues.create(leagueData)
        newLeague.populate('tournament')
        return newLeague
    }

}

export const leaguesService = new LeaguesService