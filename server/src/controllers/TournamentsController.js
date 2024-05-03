import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import { tournamentsService } from "../services/TournamentsService.js";
import BaseController from "../utils/BaseController.js";
import { response } from "express";



export class TournamentsController extends BaseController {
    constructor() {
        super('api/tournaments')
        this.router
            .get('/bashoIds', this.getAllBashoDates)
            .get('/basho/:bashoId/banzuke/Makuuchi', this.getBashoById)
            .get('', this.getAllTournaments)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.postTournament)

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

    async postTournament(request, response, next) {
        try {
            const tournament = request.body
            const postedTournament = await tournamentsService.postTournament(tournament)
            response.send(postedTournament)
        }
        catch (error) {
            next(error)
        }
    }


    async getAllTournaments(request, response, send) {
        try {
            const allTournaments = await tournamentsService.getAllTournaments()
            response.send(allTournaments)
        } catch (error) {

        }
    }
}