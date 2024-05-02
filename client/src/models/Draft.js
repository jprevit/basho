import { League } from "./League.js"
import { Tournament } from "./Tournament.js"
import { Wrestler } from "./Wrestler.js"

export class Draft{
    constructor(data){
        this.id = data.id
        this.leagueId = data.leagueId
        this.league = new League(data.league)
        this.tournamentId = data.tournamentId
        this.tournament = new Tournament(data.tournament)
        this.playerOrder = data.playerOrder
        this.currentTurn = data.currentTurn
        this.wrestlers = data.wrestler ? new Wrestler(data.wrestler) : null

        // NOTE - In many of our previous projects we have made the virtuals of models with a ternary, so that if there is no data to create a class from, it sets as null, if you are having issues with models try that
        //example: 
        //'this.player = new Account(data.player)' should be turned into 'this.player = data.player ? new Account(data.player) : null'
    }
}