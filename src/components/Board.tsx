import React, { Component } from 'react'
import { IPosition } from '../model/Onitama';

interface GridProps {
    width?: number
    heigth?: number
    pieces: any
    possibilities?: IPosition[]
    onCaseClick?: Function
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
        const caseContent = null
        const isPossibilty = this.props.possibilities && this.props.possibilities.findIndex( (p: IPosition) => p.x === x && p.y === y) !== -1
        return <div key={x + '-' + y}
            className={
                'case case-' + y + '-' + x +
                (isPossibilty ? ' case-possibility' : '')
            }
            onClick={() => this.props.onCaseClick && this.props.onCaseClick({x, y})}
        />
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