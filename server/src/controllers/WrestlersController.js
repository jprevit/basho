import { wrestlersService } from "../services/WrestlersService.js";
import BaseController from "../utils/BaseController.js";



export class WrestlersController extends BaseController {
    constructor() {
        super('/rikishis')
        this.router
            .get('', this.getAllWrestlers)
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
}