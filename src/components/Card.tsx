import React, { Component, ReactChildren } from 'react'
import { Pattern, PatternCase } from '../model/Onitama';

interface CardProps {
    name: string
    description: string
    pattern: Pattern
}
interface CardState {
}

export class Card extends Component<CardProps, CardState> {

    constructor(props: CardProps) {
        super(props)
        this.state = {
        }  
    }

    renderPattern(){
        const gridWidth = 5 
        const gridHeight = 5
        let patternGrid: JSX.Element[][] = []
        for (let y = 0; y < gridHeight; y++) {
            for (let x = 0; x < gridWidth; x++) {
                if(x === 0){ patternGrid[y] = [] as JSX.Element[] }
                
                let patternCN = ''

                switch (this.props.pattern[y][x]) {
                    case PatternCase.Empty:         patternCN = 'empty'; break;
                    case PatternCase.Piece:         patternCN = 'piece'; break;
                    case PatternCase.Possibility:   patternCN = 'possibility'; break;                    
                }
                
                patternGrid[y].push(<div className={`pattern-case pattern-case-${y}-${x} pattern-type-${patternCN}`} />)
            }            
        }

        return <div className='pattern-grid'>
            {patternGrid}
        </div>
    }

    render() {
        return (
            <div className={'card'}>
                <div className="card-pattern">{this.renderPattern()}</div>  
                <div className="card-name">{this.props.name}</div>  
                <div className="card-description">{this.props.description}</div>  
            </div>
        )
    }
}

export default Card