import { dbContext } from "../db/DbContext.js"



class WrestlersService {
    async getWrestlerById(wrestlerId) {
        const wrestler = await dbContext.Wrestlers.findById(wrestlerId)
        // if (!wrestler) throw new Error(`Not the wrestler with id ${wrestlerId}`)
        return wrestler
    }

    async getAllWrestlers() {
        const wrestlers = await dbContext.Wrestlers.find()
        return wrestlers
    }

}

export const wrestlersService = new WrestlersService