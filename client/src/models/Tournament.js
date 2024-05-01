

export class Tournament{
    constructor(data){
        this.id = data.id
        this.date = data.bashoId
        this.eastWrestlers = data.east
        this.westWrestlers = data.west
    }
}