import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { leaguesService } from "../services/LeaguesService.js";
import { tournamentsService } from "../services/TournamentsService.js";
import { logger } from "../utils/Logger.js";


export class LeaguesController extends BaseController {
    constructor() {
        super('api/leagues')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createNewLeague)
            .post('/:leagueId', this.createPlayer)
    }
    async createPlayer(request, response, next) {
        try {
            const user = request.userInfo.id
            const league = request.params.leagueId
            let newPlayerData = {
                accountId: '',
                leagueId: ''
            }

            newPlayerData.accountId = user
            newPlayerData.leagueId = league



            logger.log('controller sending', newPlayerData)
            const player = await leaguesService.createPlayer(newPlayerData)
            response.send(player)

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



}