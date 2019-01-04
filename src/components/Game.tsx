import React, { Component } from 'react'

import {Card as OCard} from '../model/Card'
import {Board as OBoard} from '../model/Board'
import Card from './Card';
import Board from './Board';
import { IPosition } from '../model/Onitama';

interface GameProps {
    opponentCards: OCard[]
    playerCards: OCard[]
    nextCard: OCard
    board: OBoard
}
interface GameState {
    selectedCardIndex: number | null
}

export class Game extends Component<GameProps, GameState> {

    constructor(props: GameProps) {
        super(props)
        this.state = {
            selectedCardIndex: null
        }  
    }

    onCardSelect = (cardIndex: number) => {
        this.setState({
            selectedCardIndex: this.state.selectedCardIndex === cardIndex ? null : cardIndex
        })
    }

    handleClickOnCase = (pos: IPosition) => {
        console.log('click on board', pos.y, pos.x)
    }

    render() {
        return (
            <div className='game'>
                <div className="game-opponent-cards">
                    {this.props.opponentCards.map( (oc, i) => <Card key={i} object={oc} />)}
                </div>
                <div className="game-common-parts">
                    <div className="game-board">
                        <Board 
                            pieces={[]} 
                            possibilities={[{x: 1, y: 2}]}
                            onCaseClick={this.handleClickOnCase}
                        />
                    </div>
                    <div className="game-next-card">
                        <Card object={this.props.nextCard} />                                
                    </div>
                </div>
                <div className="game-player-card">
                    {this.props.playerCards.map( (oc, i) => 
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