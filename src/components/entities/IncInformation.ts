class IncInformation {
    public id: number;
    public target: string;
    public source: string;
    public arrivingDate: number;
    public attackType: string;
    public targetPlayer: string;
    public attackingPlayer: string;
    public dateCreated: Date;
    public containsNoble: boolean;


    constructor(id: number, target: string, source: string, arrivingDate: number, attackType: string, targetPlayer: string, attackingPlayer: string, dateCreated: Date, containsNoble: boolean) {
        this.id = id;
        this.target = target;
        this.source = source;
        this.arrivingDate = arrivingDate;
        this.attackType = attackType;
        this.targetPlayer = targetPlayer;
        this.attackingPlayer = attackingPlayer;
        this.dateCreated = dateCreated;
        this.containsNoble = containsNoble;
    }

    targetXCoord(): number {
        return Number(this.target.split("|")[0])
    }

    targetYCoord(): number {
        return Number(this.target.split("|")[1])
    }

    sourceXCoord(): number {
        return Number(this.source.split("|")[0])
    }

    sourceYCoord(): number {
        return Number(this.source.split("|")[1])
    }
}