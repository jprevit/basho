import { tournamentsService } from "../services/TournamentsService.js";
import BaseController from "../utils/BaseController.js";



export class TournamentsController extends BaseController {
    constructor() {
        super('')
        this.router
            .get('/bashoIds', this.getAllBashoDates)
            .get('/basho/:bashoId/banzuke/Makuuchi', this.getBashoById)

    }

    async getAllBashoDates(request, response, next) {
        try {
            const dates = await tournamentsService.getAllBashoDates()
            response.send(dates)
        } catch (error) {
            next(error)
        }
    }

    async getBashoById(request, response, next) {
        try {
            const bashoId = request.params.bashoId
            const basho = await tournamentsService.getBashoById(bashoId)
            response.send(basho)
        } catch (error) {
            next(error)
        }
    }
}