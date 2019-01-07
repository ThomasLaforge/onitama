import { Piece } from "./Piece";
import { BOARD_DEFAULT_WIDTH, BOARD_DEFAULT_HEIGHT, IPosition, IBoardPiece } from "./Onitama";

export class Board {

    public grid: (Piece | null)[][]

    constructor(width = BOARD_DEFAULT_WIDTH, height = BOARD_DEFAULT_HEIGHT) {
        this.grid = []
        this.init(height, width)
    }

    init(heigth = this.height, width = this.width){
        this.grid = []
        for (let i = 0; i < width; i++) {
            this.grid.push(new Array(width).fill(null))
        }
    }

    addPieces(pieces: Piece[], firstPlayer: boolean){
        console.log('pieces', pieces)
        pieces.forEach(p => {
            this.grid[p.position.y][p.position.x] = p
        })
    }

    getPiece(pos: IPosition){
        // console.log('get piece', pos, this.grid)
        return this.grid[pos.y][pos.x]
    }

    get height(){
        return this.grid.length
    }
    get width(){
        return this.grid[0].length
    }

}