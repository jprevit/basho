import { sumoApi } from "./AxiosService.js"



class WrestlersService{

    async getAllWrestlers(){
        const response = await sumoApi.get('/rikishis')
        //console.log('rakishis from client', response)
    }
}

export const wrestlersService = new WrestlersService