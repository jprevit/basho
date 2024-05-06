import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { playersService } from "../services/PlayersService.js";
import { logger } from "../utils/Logger.js";



export class PlayersController extends BaseController {
    constructor() {
        super('api/players')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('/:leagueId', this.createPlayer)
    }

    async createPlayer(request, response, next) {
        try {
            const userId = request.userInfo.id
            const newPlayerData = request.body
            newPlayerData.accountId = userId
            console.log("server side controller requesst body", newPlayerData)
            logger.log('controller sending', newPlayerData)
            const player = await playersService.createPlayer(newPlayerData)
            response.send(player)

        } catch (error) {
            next(error)
        }
    }
}