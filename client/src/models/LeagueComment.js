export class LeagueComment{
    constructor(data){
        this.id = data.id
        this.creatorId = data.creatorId
        this.leagueId = data.leagueId
        this.body = data.body
    }
}