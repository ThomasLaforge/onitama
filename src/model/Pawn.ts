import { Piece } from "./Piece";
import { IPosition } from "./Onitama";

export class Pawn extends Piece {
    constructor(pos: IPosition) {
        super(pos)
    }
}