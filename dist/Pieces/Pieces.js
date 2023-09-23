"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Piece {
    constructor(code) {
        this.code = code;
        this.color = code[0] === 'w' ? 'white' : 'black';
    }
    getPieceCode() {
        return this.code;
    }
    isMovePossible(from, to, boardState) {
        let possibleMoves = this.possibleMoves(from, boardState);
        return possibleMoves.includes(to);
    }
    getPieceColor() {
        return this.color;
    }
}
exports.default = Piece;
