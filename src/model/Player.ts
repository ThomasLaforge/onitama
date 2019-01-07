import uuid from 'uuid/v1'
import { Piece } from "./Piece";
import { Card } from "./Card";
import {BOARD_DEFAULT_HEIGHT, BOARD_DEFAULT_WIDTH, PieceType} from './Onitama'

const generateFirstPlayerPieces = (playerId: string) : Piece[] => new Array(BOARD_DEFAULT_WIDTH)
    .fill(null)
    .map( (e, i) => {
        const pos = { x: i, y: BOARD_DEFAULT_HEIGHT - 1 }
        return i === 2 
            ? new Piece(pos, PieceType.King, playerId)
            : new Piece(pos, PieceType.Pawn, playerId)
    })
const generateSecondPlayerPieces = (playerId: string) : Piece[] => generateFirstPlayerPieces(playerId).map(p => {
    let pos = { x: p.position.x, y: 0}
    return new Piece(pos, p.type, playerId)
})
console.log('initial pieces', generateFirstPlayerPieces(''), generateSecondPlayerPieces(''))

export class Player {

    public id: string 
    public pieces: Piece[]
    public cards: Card[]
    public isFirstPlayer: boolean
    
    constructor(firstPlayer = true, id = uuid()) {
        this.id = id
        this.pieces = firstPlayer ? generateFirstPlayerPieces(id) : generateSecondPlayerPieces(id) 
        this.cards = []
        this.isFirstPlayer = firstPlayer
    }
    
    isEqual(p: Player){
        return this.id === p.id
    }

    get activePieces(){
        return this.pieces.filter(p => p.alive)        
    }
    get lostPieces(){
        return this.pieces.filter(p => !p.alive)
    }
}