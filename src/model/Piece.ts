import { IPosition, PieceType } from "./Onitama";

export class Piece {

    public position: IPosition
    public alive: boolean
    public type: PieceType
    public owner: string // Owner/Player id

    constructor(pos: IPosition, type: PieceType, playerId: string, alive = true){
        this.position = pos
        this.alive = alive
        this.type = type
        this.owner = playerId
    }

    collides(p: Piece | IPosition){
        let {x, y} = p instanceof Piece ? p.position : p
        return this.position.x === x && this.position.y === y
    }

    toString(){
        return `pos: ${this.position.y} - ${this.position.x}, type: ${this.getTypeName()}`
    }

    getTypeName(){
        return this.type === PieceType.King ? 'king' : 'pawn'
    }

    isKing(){
        return this.type === PieceType.King
    }
    isPawn(){
        return this.type === PieceType.Pawn
    }
}