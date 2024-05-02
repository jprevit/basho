export class League{
    constructor(data){
        this.id = data.id
        this.creatorId = data.creatorId
        this.tournamentId = data.tournamentId
        this.stableCapacity = data.stableCapacity
        this.playerCapacity = data.playerCapacity
        this.startDate = data.startDate
        this.public = data.public
        this.division = data.division
        //NOTE we may use join code later, just using this.id for now
        //this.joinCode = data.joinCode
        this.players = data.players
        this.started = data.started
    }
}