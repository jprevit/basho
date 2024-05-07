import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { playersService } from "../services/PlayersService.js";
import { Logger, logger } from "../utils/Logger.js";



export class PlayersController extends BaseController {
    constructor() {
        super('api/players')
        this.router
            .get('/:leagueId', this.getPlayersByLeagueId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('/:leagueId', this.createPlayer)
            .delete('/:playerId', this.kickPlayer)
    }

    async getPlayersByLeagueId(request, response, next) {
        try {
            const leagueId = request.params.leagueId
            const players = await playersService.getPlayersByLeagueId(leagueId)
            response.send(players)
        } catch (error) {
            next(error)
        }
    }


    async kickPlayer(request, response, next) {
        try {
            const playerToKick = request.params.playerId
            const userId = request.userInfo.id
            const message = await playersService.kickPlayer(playerToKick, userId)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }

    async createPlayer(request, response, next) {
        try {
            const userId = request.userInfo.id
            const newPlayerData = request.body
            newPlayerData.accountId = userId
            console.log("server side controller request body", newPlayerData)
            logger.log('controller sending', newPlayerData)
            const player = await playersService.createPlayer(newPlayerData)
            response.send(player)

        } catch (error) {
            next(error)
        }
    }
}