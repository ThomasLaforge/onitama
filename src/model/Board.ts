import { Piece } from "./Piece";
import { BOARD_DEFAULT_WIDTH, BOARD_DEFAULT_HEIGHT } from "./Onitama";

export class Board {

    public grid: (Piece | null)[][]

    constructor(width = BOARD_DEFAULT_WIDTH, height = BOARD_DEFAULT_HEIGHT) {
        this.grid = new Array(height).fill(new Array(width).fill(null))
    }

    init(){
        this.grid = new Array(this.height).fill(new Array(this.width).fill(null))
    }

    get height(){
        return this.grid.length
    }
    get width(){
        return this.grid[0].length
    }

}