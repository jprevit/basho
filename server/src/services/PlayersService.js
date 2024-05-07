import { Forbidden } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { logger } from "../utils/Logger.js"
import { leaguesService } from "./LeaguesService.js"



class PlayersService {
    async kickPlayer(playerToKick, userId) {
        const playerToDelete = await dbContext.Players.findById(playerToKick)
        const league = await leaguesService.getLeagueById(playerToDelete.leagueId)
        if (league.creatorId != userId) throw new Forbidden(`You are not authorized to kick this player [creator ${league.creatorId}, user ${userId}`)
        await playerToDelete.deleteOne()
        return `${playerToDelete} has been kicked`
    }
    async createPlayer(newPlayerData) {
        console.log("new player data from server", newPlayerData)

        const existingPlayer = await dbContext.Players.findOne({ accountId: newPlayerData.accountId, leagueId: newPlayerData.leagueId })
        if (existingPlayer) throw new Error("You have already joined this league.")

        const leagueAttemptingToJoin = await leaguesService.getLeagueById(newPlayerData.leagueId)
        if (leagueAttemptingToJoin.state != "starting") throw new Error("This league has already started")
        if (leagueAttemptingToJoin.players.length >= leagueAttemptingToJoin.playerCapacity) throw new Error("This league is full")

        logger.log('service received', newPlayerData)
        const newPlayer = await dbContext.Players.create(newPlayerData)
        leagueAttemptingToJoin.players.push(newPlayerData.accountId)
        leagueAttemptingToJoin.save()
        // newPlayer.populate('league')
        return newPlayer
    }
}

export const playersService = new PlayersService