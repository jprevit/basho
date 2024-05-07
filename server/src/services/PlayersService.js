import { dbContext } from "../db/DbContext.js"
import { logger } from "../utils/Logger.js"
import { leaguesService } from "./LeaguesService.js"



class PlayersService {
    async createPlayer(newPlayerData) {
        console.log("new player data from server", newPlayerData)

        const existingPlayer = await dbContext.Players.findOne({ accountId: newPlayerData.accountId, leagueId: newPlayerData.leagueId })
        if (existingPlayer) throw new Error("You have already joined this league.")

        const leagueAttemptingToJoin = await leaguesService.getLeagueById(newPlayerData.leagueId)
        if (leagueAttemptingToJoin.players.length >= leagueAttemptingToJoin.playerCapacity) throw new Error("This league is full")
        if (leagueAttemptingToJoin.state != "starting") throw new Error("This league has already started")

        logger.log('service received', newPlayerData)
        const newPlayer = await dbContext.Players.create(newPlayerData)
        leagueAttemptingToJoin.players.push(newPlayerData.accountId)
        // newPlayer.populate('league')
        return newPlayer
    }
}

export const playersService = new PlayersService