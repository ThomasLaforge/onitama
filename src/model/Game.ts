import { Board } from "./Board";
import { Player } from "./Player";
import { Card } from "./Card";
import { IPosition } from "./Onitama";
import { Piece } from "./Piece";
import { Deck } from "./Deck";

export class Game {

    public board: Board
    public players: Player[]
    public deck: Deck
    public nextCard: Card

    constructor(players: Player[], board = new Board(), deck = new Deck()) {
        this.players = players
        this.board = board
        this.deck = deck
        console.log('deck before picking', deck.cards.slice())
        this.nextCard = this.deck.pickCards(1)[0]
        console.log('common card', this.nextCard)
        this.players.forEach(p => p.cards = this.deck.pickCards(2))
    }

    move(p: Player, c: Card, piece: Piece, pos: IPosition){
        // check move is possible
            // piece
            // move correspond to card
            // not colliding another piece of this player
        // Move piece
        // check collision with oppponent
    }

    getPlayer(p: Player){
        return this.players.find(player => player.id === p.id)
    }
    getOpponent(p: Player){
        return this.players.find(player => player.id !== p.id)
    }

}