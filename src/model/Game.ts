import { Board } from "./Board";
import { Player } from "./Player";
import { Card } from "./Card";
import { IPosition, IMove, IBoardPiece } from "./Onitama";
import { Piece } from "./Piece";
import { Deck } from "./Deck";

export class Game {

    public board: Board
    public players: Player[]
    public deck: Deck
    public nextCard: Card
    public indexCurrentPlayer: number

    constructor(players: Player[], firstPlayerIndex = 0, board = new Board(), deck = new Deck()) {
        this.players = players
        this.board = board
        this.players.forEach(p => {
            this.board.addPieces(p.pieces, p.isFirstPlayer)
        })

        console.log('after add pieces', this.board.grid)
        this.deck = deck
        this.nextCard = this.deck.pickCards(1)[0]
        this.players.forEach(p => p.cards = this.deck.pickCards(2))
        this.indexCurrentPlayer = firstPlayerIndex
    }

    getPossibleMoves(pos: IPosition, c: Card): IPosition[] {
        let p = this.board.getPiece(pos) as Piece
        // console.log('piece for possible moves', p, pos)
        // let playerPiece = this.players.find(player => player.id === p.owner)
        // let playerCard = this.getCardOwner(c)

        // Check players
        // if(!playerPiece){ throw Error('any player has this piece, ' + p.toString())}
        // if(!playerCard){ throw Error('any player has this Card, ' + c.name)}
        // if(!playerCard.isEqual(playerPiece)){
        //     console.log('player not equal', playerCard.id === playerPiece.id, playerCard.id, playerPiece.id)
        //     throw Error('player are not the same: ' + (playerCard && playerCard.id) + ' and ' + (playerPiece && playerPiece.id)) 
        // }
        
        return  c.getPossibleMoves()
                    .map(m => this.getPositionFromMoveOnPiece(p, m))
                    .filter( (pos: IPosition) => this.isPositionOnBoard(pos) && this.positionNotCollidesOwnPiece(pos, p.owner))
    }

    move(p: Player, c: Card, piece: Piece, pos: IPosition){
        // check move is possible
            // piece
            // move correspond to card
            // not colliding another piece of this player
        // Move piece
        // check collision with oppponent
        // switch card
        let nextCard = this.nextCard
        this.nextCard = c
        p.cards = p.cards.filter(card => !c.is(card)).concat(nextCard)
    }

    nextPlayer(){
        this.indexCurrentPlayer = (this.indexCurrentPlayer + 1) % 2
    }

    getPlayer(p: Player | string){
        return this.players.find(player => p instanceof Player ? p.id === player.id : p === player.id)
    }
    getOpponent(p: Player){
        return this.players.find(player => player.id !== p.id)
    }

    getPiecesForBoard(): IBoardPiece[]{
        return this.players.flatMap(p => 
            p.activePieces.map(piece => (
                { 
                    x: piece.position.x,
                    y: piece.position.y,
                    isFirstPlayer: p.id === this.firstPlayer.id
                }
            ))
        )
    }

    getPositionFromMoveOnPiece(p: Piece, m: IMove): IPosition{
        return {
            x: p.position.x + m.x,
            y: p.position.y + m.y,
        }
    }

    isPositionOnBoard(pos: IPosition){
        return  pos.x >= 0 && pos.x < this.board.width &&
                pos.y >= 0 && pos.y < this.board.height
    }

    positionNotCollidesOwnPiece(pos: IPosition, owner: string){
        let player = this.players.find(p => p.id === owner) as Player
        return player.pieces.filter(p => p.collides(pos)).length === 0
    }

    getPieceOwner(piece: Piece){
        return this.players.find(p => p.pieces.findIndex(p => p.collides(piece)) !== -1)
    }
    getCardOwner(card: Card){
        return this.players.find(p => p.cards.findIndex(c => c.name === card.name) !== -1)
    }

    get firstPlayer(){
        return this.players[0]
    }
}