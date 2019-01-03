import React, { Component } from 'react'

interface PawnProps {
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
      <div className='pawn'>
        
      </div>
    )
  }
}

export default Pawn