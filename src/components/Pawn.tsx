import React, { Component } from 'react'

interface PawnProps {
  isFirstPlayer: boolean
}
interface PawnState {
}

export class Pawn extends Component<PawnProps, PawnState> {

    constructor(props: PawnProps) {
        super(props)
        this.state = {
        }  
    }

  render() {
    return (
      <div className={'pawn ' +
        (this.props.isFirstPlayer ? 'pawn-first-player' : 'pawn-second-player')
      }>
        Pawn
      </div>
    )
  }
}

export default Pawn