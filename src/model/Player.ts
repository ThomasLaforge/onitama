import { Piece } from "./Piece";

export class Player {

    public pieces: Piece[]
    
    constructor(pieces: Piece[]) {
        this.pieces = pieces
    }
    
    get activePieces(){
        return this.pieces.filter(p => p.alive)        
    }
    get lostPieces(){
        return this.pieces.filter(p => !p.alive)
    }
}