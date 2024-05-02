import { Account } from "./Account.js"
import { League } from "./League.js"
import { Wrestler } from "./Wrestler.js"

export class StableMember{
    constructor(data){
        this.id = data.id
        this.wrestlerId = data.wrestlerId
        this.wrestler = new Wrestler(data.wrestler)
        this.leagueId = data.leagueId
        this.league = new League(data.league)
        this.playerId = data.playerId
        this.player = new Account(data.player)
        
        // NOTE - In many of our previous projects we have made the virtuals of models with a ternary, so that if there is no data to create a class from, it sets as null, if you are having issues with models try that
        //example: 
        //'this.player = new Account(data.player)' should be turned into 'this.player = data.player ? new Account(data.player) : null'
    }
}