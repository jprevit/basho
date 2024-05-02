/* eslint-disable no-console */
import { Account } from "./Account.js"
import { Draft } from "./Draft.js"
import { Tournament } from "./Tournament.js"

export class League{
    constructor(data){
        this.id = data.id
        this.leagueName = data.leagueName
        this.creatorId = data.creatorId
        this.creator = new Account(data.creator)
        this.tournamentId = data.tournamentId
        this.tournament = new Tournament(data.tournament)
        this.draftId = data.draftId
        this.draft = data.draft ? new Draft(data.draft) : null
        this.stableCapacity = data.stableCapacity
        this.playerCapacity = data.playerCapacity
        this.startDate = data.startDate
        this.public = data.public
        this.division = data.division
        //NOTE we may use join code later, just using this.id for now
        //this.joinCode = data.joinCode
        this.players = data.players
        this.state = data.state
        this.tournamentWrestlers = data.tournamentWrestlers ? data.tournamentWrestlers : createTournamentWrestlers(this.tournament.westWrestlers, this.tournament.eastWrestlers)

        // NOTE - In many of our previous projects we have made the virtuals of models with a ternary, so that if there is no data to create a class from, it sets as null, if you are having issues with models try that
        //example: 
        //'this.player = new Account(data.player)' should be turned into 'this.player = data.player ? new Account(data.player) : null'
    }
}

function createTournamentWrestlers(westWrestlers, eastWrestlers){
    let tournamentWrestlers = []
    tournamentWrestlers.push(...eastWrestlers, ...westWrestlers)
    console.log('tournament wrestlers in model', tournamentWrestlers);
    return tournamentWrestlers
}