

export class Tournament{
    constructor(data){
        this.id = data.bashoId
        this.bashoId = data.bashoId
        this.date = data.bashoId
        this.eastWrestlers = data.eastWrestlers ? data.eastWrestlers : data.east
        this.westWrestlers = data.westWrestlers ? data.westWrestlers : data.west
    }
}