import React, { Component } from 'react'

import {Card as OCard} from '../model/Card'
import {Board as OBoard} from '../model/Board'
import {Game as OGame} from '../model/Game'
import Card from './Card';
import Board from './Board';
import { IPosition } from '../model/Onitama';
import { Player } from '../model/Player';
import { Piece } from '../model/Piece';

interface GameProps {
    object: OGame
}
interface GameState {
    selectedCardIndex: number | null
    selectedPiecePosition: IPosition | null
    playerId: string
}

export class Game extends Component<GameProps, GameState> {

    constructor(props: GameProps) {
        super(props)
        this.state = {
            selectedCardIndex: null,
            selectedPiecePosition: null,
            playerId: this.props.object.players[0].id
        }  
    }

    get possibilities(){
        let possibilities: IPosition[] = []
        const cardAndPieceSelected = !!this.state.selectedPiecePosition && (!!this.state.selectedCardIndex || this.state.selectedCardIndex === 0)
        if(cardAndPieceSelected){
            const piecePosition = this.state.selectedPiecePosition as IPosition
            const cardIndex = this.state.selectedCardIndex as number
            console.log('try to get possibilities', this.state.selectedPiecePosition, this.state.selectedCardIndex, this.props.object.players[0].cards)
            possibilities = this.props.object.getPossibleMoves(piecePosition, this.props.object.players[0].cards[cardIndex])
        }
        return possibilities 
    }

    get player(): Player {
      return this.props.object.getPlayer(this.state.playerId) as Player
    }

    onCardSelect = (cardIndex: number) => {
        this.setState({
            selectedCardIndex: this.state.selectedCardIndex === cardIndex ? null : cardIndex
        })
    }

    handleClickOnCase = (pos: IPosition) => {
        console.log('click on board', pos.y, pos.x)
        let game = this.props.object
        let player = this.player
        const clickHisPiece = this.player.activePieces.filter(p => p.collides(pos)).length === 1
        const clickOnPossibleMove = this.possibilities.filter(position => pos.x === position.x && position.y === pos.y).length === 1

        if(clickHisPiece){
            let collides = false
            if(!!this.state.selectedPiecePosition){
                let {x, y} = this.state.selectedPiecePosition
                collides = x === pos.x && y === pos.y 
            }
            this.setState({
                selectedPiecePosition: collides ? null : pos
            })
        }
        else if(clickOnPossibleMove && !!this.state.selectedCardIndex && this.state.selectedPiecePosition !== null){
            let card = player.cards[this.state.selectedCardIndex]
            let selectedPiecePos = this.state.selectedPiecePosition as IPosition
            let piece = player.activePieces.find(p => p.position.x === selectedPiecePos.x && p.position.y === selectedPiecePos.y) as Piece
            game.move(player, card, piece, pos)
        }
        else {
            console.log('case click not handled')
        }
    }



    render() {
        // console.log('pieces', this.props.object.getPiecesForBoard())
        return (
            <div className='game'>
                <div className="game-opponent-cards">
                    {this.props.object.players[1].cards.map( (oc, i) => <Card key={i} object={oc} />)}
                </div>
                <div className="game-common-parts">
                    <div className="game-board">
                        <Board 
                            pieces={this.props.object.getPiecesForBoard()} 
                            possibilities={this.possibilities}
                            onCaseClick={this.handleClickOnCase}
                            firstPlayerId={this.props.object.firstPlayer.id}
                        />
                    </div>
                    <div className="game-next-card">
                        <Card object={this.props.object.nextCard} />                                
                    </div>
                </div>
                <div className="game-player-card">
                    {this.props.object.players[0].cards.map( (oc, i) => 
                        <Card key={i} 
                            object={oc}
                            selected={this.state.selectedCardIndex === i}
                            onSelect={() => this.onCardSelect(i)} 
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Game