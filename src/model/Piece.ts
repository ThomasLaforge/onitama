import { IPosition } from "./Onitama";

export class Piece {

    public position: IPosition
    public alive: boolean

    constructor(pos: IPosition, alive = true){
        this.position = pos
        this.alive = alive
    }

}