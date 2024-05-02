import { wrestlersService } from "../services/WrestlersService.js";
import BaseController from "../utils/BaseController.js";



export class WrestlersController extends BaseController {
    constructor() {
        super('/rikishis')
        this.router
            .get('', this.getAllWrestlers)
            .get('/:rikishiId', this.getWrestlerById)
    }

    async getAllWrestlers(request, response, next) {
        try {
            const wrestlers = await wrestlersService.getAllWrestlers()
            response.send(wrestlers)
        }
        catch (error) {
            next(error)
        }
    }


    async getWrestlerById(request, response, next) {
        try {
            const wrestlerId = request.params.rikishiId
            const wrestler = await wrestlersService.getWrestlerById(wrestlerId)
            response.send(wrestler)
        } catch (error) {
            next(error)
        }
    }


}