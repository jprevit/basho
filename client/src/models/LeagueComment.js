import { Account } from "./Account.js"

export class LeagueComment{
    constructor(data){
        this.id = data.id
        this.creatorId = data.creatorId
        this.creator = new Account(data.creator)
        this.leagueId = data.leagueId
        this.body = data.body

        // NOTE - In many of our previous projects we have made the virtuals of models with a ternary, so that if there is no data to create a class from, it sets as null, if you are having issues with models try that
        //example: 
        //'this.player = new Account(data.player)' should be turned into 'this.player = data.player ? new Account(data.player) : null'
    }
}