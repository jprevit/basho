import { dbContext } from "../db/DbContext.js"

class StableMembersService {
    async addWrestlertoStable(stableMemberData) {
        const stableMember = await dbContext.StableMembers.create(stableMemberData)
        stableMember.populate('player wrestler league')
        return stableMember
    }

}

export const stableMembersService = new StableMembersService