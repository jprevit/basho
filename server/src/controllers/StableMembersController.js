import { Auth0Provider } from "@bcwdev/auth0provider/lib/Auth0Provider.js";
import BaseController from "../utils/BaseController.js";
import { stableMembersService } from "../services/StableMembersService.js";

export class StableMembersController extends BaseController {
    constructor() {
        super('api/stablemembers')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.addWrestlertoStable)
    }



    async addWrestlertoStable(request, response, next) {
        try {
            const user = request.userInfo
            const stableMemberData = request.body
            stableMemberData.playerId = user.id
            const stableMember = await stableMembersService.addWrestlertoStable(stableMemberData)
            response.send(stableMember)
        } catch (error) {
            next(error)
        }
    }

}