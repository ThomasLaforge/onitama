import React, { Component } from 'react'
import { IPosition, IBoardPiece } from '../model/Onitama';
import Pawn from './Pawn';

interface GridProps {
    width?: number
    heigth?: number
    pieces: IBoardPiece[]
    possibilities?: IPosition[]
    onCaseClick?: Function
    firstPlayerId: string
}
interface GridState {
    width: number
    heigth: number
}

export class Grid extends Component<GridProps, GridState> {

    constructor(props: GridProps) {
        super(props)
        this.state = {
            heigth: this.props.heigth || 5,
            width: this.props.width || 5   
        }
    }

    renderCase(x:number, y: number){
        const isPossibilty = this.props.possibilities && this.props.possibilities.findIndex( (p: IPosition) => p.x === x && p.y === y) !== -1
        const pieceIndex = this.props.pieces.findIndex(p => p.x === x && p.y === y)
        const isPiece = pieceIndex !== -1

        return <div key={x + '-' + y}
            className={
                'case case-' + y + '-' + x +
                (isPossibilty ? ' case-possibility' : '')
            }
            onClick={() => this.props.onCaseClick && this.props.onCaseClick({x, y})}
        >
            {isPiece && <Pawn isFirstPlayer={this.props.pieces[pieceIndex].isFirstPlayer} /> }
        </div>
    }

    renderLine(y: number){
        let { width } = this.state
        let line = new Array(width).fill(null).map( (e, x) => this.renderCase(x, y))
        return <div key={y} className={'line line-' + y}>{line}</div>
    }

    renderGridContent(){
        let { heigth } = this.state
        let lines = new Array(heigth).fill(null).map( (e, y) => this.renderLine(y))
        return <div className='grid-content'>{lines}</div>
    }

    render() {
        return (
            <div className={'grid'}>
                {this.renderGridContent()}
            </div>
        )
    }
}

export default Grid