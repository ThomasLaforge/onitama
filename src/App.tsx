import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Game from './components/Game';
import { Player } from './model/Player';
import { Game as OGame } from './model/Game';

const opponent = new Player(false)
const mainPlayer = new Player(true)

const game = new OGame([opponent, mainPlayer])

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game 
          board={game.board}
          nextCard={game.nextCard}
          opponentCards={game.players[1].cards}
          playerCards={game.players[0].cards}
        />
      </div>
    );
  }
}

export default App;
