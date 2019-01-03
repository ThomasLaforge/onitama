import React, { Component } from 'react'

import {Card as OCard} from '../model/Card'
import {Board as OBoard} from '../model/Board'

interface GameProps {
    opponentCards: OCard[]
    playerCards: OCard[]
    nextCard: OCard
    board: OBoard
}
interface GameState {
}

export class Game extends Component<GameProps, GameState> {

    constructor(props: GameProps) {
        super(props)
        this.state = {
        }  
    }

  render() {
        return (
            <div className='game'>
                <div className="game-opponent-cards">
                
                </div>
                <div className="game-common-parts">
                    <div className="game-board">
                    
                    </div>
                    <div className="game-next-card">
                    
                    </div>
                </div>
                <div className="game-player-card">
                
                </div>
            </div>
        )
  }
}

export default Game