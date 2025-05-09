import { Forbidden } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { logger } from "../utils/Logger.js"



class LeaguesService {
    async getMyLeagues(playerId) {
        const myLeagues = await dbContext.Leagues.find({ playerId: playerId }).populate('profile player')
        console.log('my leages', myLeagues);
        return myLeagues
    }
    async updateTurn(leagueId, turn) {
        const leaguetoUpdate = await this.getLeagueById(leagueId)
        leaguetoUpdate.turn = turn
        await leaguetoUpdate.save()
        return leaguetoUpdate
    }
    async updateLeagueWrestlers(leagueId, wrestlersList) {
        const leagueToUpdate = await this.getLeagueById(leagueId)
        leagueToUpdate.tournamentWrestlers = wrestlersList
        await leagueToUpdate.save()
        return leagueToUpdate
    }

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
        await newLeague.populate('creator')
        return newLeague
    }

    async getAllLeagues() {
        const leagues = await dbContext.Leagues.find().populate('creator', '-email')
        return leagues
    }

    async getLeagueById(leagueId) {
        const league = await dbContext.Leagues.findById(leagueId)
        await league.populate('creator', '-email')
        return league
    }

    async closeLeague(leagueId, userId) {
        const leagueToClose = await this.getLeagueById(leagueId)
        if (leagueToClose.creatorId != userId) throw new Forbidden('cant delete a league you did not start')
        leagueToClose.isClosed = !leagueToClose.isClosed
        await leagueToClose.save()
        return `${leagueToClose.leagueName} has been closed`
    }
}

export const leaguesService = new LeaguesService