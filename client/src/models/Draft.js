export class Draft{
    constructor(data){
        this.id = data.id
        this.leagueId = data.leagueId
        this.tournamentId = data.tournamentId
        this.playerOrder = data.playerOrder
        this.currentTurn = data.currentTurn
    }
}