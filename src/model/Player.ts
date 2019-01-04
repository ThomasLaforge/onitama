import uuid from 'uuid/v1'
import { Piece } from "./Piece";
import { Card } from "./Card";
import {BOARD_DEFAULT_HEIGHT, BOARD_DEFAULT_WIDTH} from './Onitama'
import { King } from './King';
import { Pawn } from './Pawn';

const firstPlayerPieces: Piece[] = new Array(BOARD_DEFAULT_WIDTH)
    .fill(null)
    .map( (e, i) => {
        const pos = { x: i, y: BOARD_DEFAULT_HEIGHT - 1 }
        return i === 2 
            ? new King(pos)
            : new Pawn(pos)
    })
const notFirstPlayerPieces: Piece[] = firstPlayerPieces.map(p => {
    let pos = { x: p.position.x, y: 0}
    return p.position.x === 2 ? new King(pos) : new Pawn(pos)
})

export class Player {

    public id: string 
    public pieces: Piece[]
    public cards: Card[]
    
    constructor(firstPlayer = true, id = uuid()) {
        this.id = id
        this.pieces = firstPlayer ? firstPlayerPieces : notFirstPlayerPieces 
        this.cards = []
    }
    
    get activePieces(){
        return this.pieces.filter(p => p.alive)        
    }
    get lostPieces(){
        return this.pieces.filter(p => !p.alive)
    }
}