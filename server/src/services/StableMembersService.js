import { dbContext } from "../db/DbContext.js"

class StableMembersService {
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