import { dbContext } from "../db/DbContext.js"

class StableMembersService {
    async getStablebyProfileId(profileId, leagueId) {
        const stable = await dbContext.StableMembers.find({ playerId: profileId, leagueId: leagueId }).populate('player wrestler league')
        return stable
    }
    async getStablemembersByLeague(leagueIdtofind) {
        const stablemembers = await dbContext.StableMembers.find({ leagueId: leagueIdtofind }).populate('player wrestler league')
        return stablemembers
    }
    async addWrestlertoStable(stableMemberData) {
        const stableMember = await dbContext.StableMembers.create(stableMemberData)
        await stableMember.populate('player wrestler league')
        return stableMember
    }

}

export const stableMembersService = new StableMembersService