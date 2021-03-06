export interface IPosition {
    x: number,
    y: number
}

export interface IMove extends IPosition {}

export const BOARD_DEFAULT_HEIGHT = 5
export const BOARD_DEFAULT_WIDTH = 5

export interface IJsonCard {
    name: string,
    description: string,
    pattern: number[][]
}

export enum PatternCase {
    Empty = 0,
    Possibility = 1,
    Piece = 2
} 

export type Pattern = PatternCase[][]

export enum PieceType {
    Pawn,
    King
}

export interface IBoardPiece extends IPosition {
    isFirstPlayer: boolean
}