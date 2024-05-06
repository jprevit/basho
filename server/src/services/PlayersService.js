import { dbContext } from "../db/DbContext.js"
import { logger } from "../utils/Logger.js"



class PlayersService {
    async createPlayer(newPlayerData) {
        console.log("new player data from server", newPlayerData)

        const existingPlayer = await dbContext.Players.findOne({ accountId: newPlayerData.accountId })
        if (existingPlayer.leagueId == newPlayerData.leagueId) throw new Error("You have already joined this league.")

        logger.log('service received', newPlayerData)
        const newPlayer = await dbContext.Players.create(newPlayerData)
        newPlayer.populate('league')
        return newPlayer
    }
}

export const playersService = new PlayersService