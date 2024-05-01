import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";


export class LeaguesController extends BaseController {
    constructor() {
        super('api/leagues')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createNewLeague)
    }

    async createNewLeague(request, response, next) {
        try {
            const user = request.userInfo
            const leagueData = request.body
            response.send("makin a league")
        } catch (error) {
            next(error)
        }
    }
}