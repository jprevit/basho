import { dbContext } from "../db/DbContext.js"



class WrestlersService {
    async getAllWrestlers() {
        const wrestlers = await dbContext.Wrestlers.find()
        return wrestlers
    }

}

export const wrestlersService = new WrestlersService