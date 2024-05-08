import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { leaguesService } from "../services/LeaguesService.js";
import { tournamentsService } from "../services/TournamentsService.js";
import { logger } from "../utils/Logger.js";


export class LeaguesController extends BaseController {
    constructor() {
        super('api/leagues')
        this.router
            .get('', this.getAllLeagues)
            .get('/:leagueId', this.getLeagueById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createNewLeague)
            .put('/:leagueId', this.changeLeagueState)
            .put('/:leagueId/leaguewrestlers', this.updateLeagueWrestlers)
            .delete('/:leagueId', this.closeLeague)
            .put('/:leagueId/turn', this.updateTurn)
    }
    async updateTurn(request, response, next) {
        try {
            const leagueId = request.params.leagueId
            const turn = request.body
            const updatedLeagueTurn = await leaguesService.updateTurn(leagueId, turn)
            response.send(updatedLeagueTurn)
        } catch (error) {
            next(error)
        }
    }




    async createNewLeague(request, response, next) {
        try {

            console.log('request', request);
            const user = request.userInfo
            const leagueData = request.body
            leagueData.creatorId = user.id

            // const activeTournament = await tournamentsService.getBashoById()
            // console.log('leagues controller active tournament', activeTournament);
            const newLeague = await leaguesService.createNewLeague(leagueData)
            response.send(newLeague)
        } catch (error) {
            next(error)
        }
    }

    async getAllLeagues(request, response, next) {
        try {
            console.log('getting all leagues')
            const leagues = await leaguesService.getAllLeagues()
            response.send(leagues)
        }
        catch (error) {
            next(error);
        }
    }

    async getLeagueById(request, response, next) {
        try {
            const leagueId = request.params.leagueId
            const league = await leaguesService.getLeagueById(leagueId)
            response.send(league)
        } catch (error) {
            next(error)
        }
    }

    async changeLeagueState(request, response, next) {
        try {
            const leagueId = request.params.leagueId
            const updatedState = request.body.state
            const updatedLeague = await leaguesService.changeLeagueState(leagueId, updatedState)
            response.send(updatedLeague)
        }
        catch (error) {
            next(error)
        }
    }

    async closeLeague(request, response, next) {
        try {
            const leagueId = request.params.leagueId
            const userId = request.userInfo.id
            const closedLeague = await leaguesService.closeLeague(leagueId, userId)
            response.send(closedLeague)
        } catch (error) {
            next(error)
        }
    }

    async updateLeagueWrestlers(request, response, next) {
        try {
            const leagueId = request.params.leagueId
            const wrestlersList = request.body
            const updatedWrestlers = await leaguesService.updateLeagueWrestlers(leagueId, wrestlersList)
            response.send(updatedWrestlers)
        } catch (error) {
            next(error)
        }
    }

}