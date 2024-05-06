import { dbContext } from "../db/DbContext.js"



class LeaguesService {
    async createPlayer(newPlayerData) {
        const newPlayer = await dbContext.Players.create(newPlayerData)
        newPlayer.populate('league profile')
        return newPlayer
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
        const leagues = await dbContext.Leagues.find().populate('creator tournament')
        return leagues
    }

}

export const leaguesService = new LeaguesService