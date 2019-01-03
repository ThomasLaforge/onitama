import React, { Component } from 'react'

interface GridProps {
    width?: number
    heigth?: number
    pieces: any
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
        return <div className={'case case-' + y + '-' + x}>
            {y + ' - ' + x}
        </div>
    }

    renderLine(y: number){
        let { width } = this.state
        let line = new Array(width).fill(null).map(x => this.renderCase(x, y))
        return <div className={'line line-' + y}>{line}</div>
    }

    renderGridContent(){
        let { heigth } = this.state
        let lines = new Array(heigth).fill(null).map(y => this.renderLine(y))
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