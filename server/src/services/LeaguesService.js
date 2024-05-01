import { dbContext } from "../db/DbContext.js"



class LeaguesService {
    async createNewLeague(leagueData) {
        const newLeague = await dbContext.Leagues.create(leagueData)
        newLeague.populate('tournament')
        return newLeague
    }

}

export const leaguesService = new LeaguesService