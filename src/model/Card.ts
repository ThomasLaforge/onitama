import { Pattern, IPosition, IMove, PatternCase } from "./Onitama";

export class Card {

    public name: string // uniq
    public description: string
    public pattern: Pattern

    constructor(name: string, description: string, pattern: Pattern){
        this.name = name
        this.description = description
        this.pattern = pattern
    }

    getMPossibleMoves(){
        let moves: IMove[]
        for (let j = 0; j < this.pattern.length; j++) {
            for (let i = 0; i < this.pattern[j].length; i++) {
                if(this.pattern[j][i] === PatternCase.Possibility){
                    // Piece is on position (2, 2) on each pattern. But could be found searching before the PatternCase.Piece 
                    moves.push({
                        x: i - 2,
                        y: j - 2
                    })
                }
            }            
        }
    }
}