import { dbContext } from "../db/DbContext.js"

class StableMembersService {
    async getStablebyAccountId(accountId, leagueId) {
        const stable = await dbContext.StableMembers.find({ accountId: accountId, leagueId: leagueId })
        return stable
    }
    async getStablemembersByLeague(leagueIdtofind) {
        const stablemembers = await dbContext.StableMembers.find({ leagueId: leagueIdtofind })
        return stablemembers
    }
    async addWrestlertoStable(stableMemberData) {
        const stableMember = await dbContext.StableMembers.create(stableMemberData)
        await stableMember.populate('player wrestler league')
        return stableMember
    }

}

export const stableMembersService = new StableMembersService