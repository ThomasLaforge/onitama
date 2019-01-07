import React, { Component } from 'react';
import './App.scss';
import Game from './components/Game';
import { Player } from './model/Player';
import { Game as OGame } from './model/Game';

const opponent = new Player(false)
const mainPlayer = new Player(true)

interface AppProps {

}

interface AppState {
  game: OGame
}

class App extends Component <AppProps, AppState>{
  constructor(props: any){
    super(props)
    this.state = {
      game: new OGame([opponent, mainPlayer])
    }
  }

  render() {
    return (
      <div className="App">
        <Game object={this.state.game} />
      </div>
    );
  }
}

export default App;
