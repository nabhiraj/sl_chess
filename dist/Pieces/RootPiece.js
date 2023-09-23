"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PosConversionUtil_1 = __importDefault(require("./PosConversionUtil"));
class RootPiece {
    constructor(code) {
        this.code = code;
        this.color = code[0] === 'w' ? 'white' : 'black';
    }
    getPieceCode() {
        return this.code;
    }
    possibleMoves(currPosition, boardState) {
        let res = [];
        let currRow = PosConversionUtil_1.default.getRow(currPosition);
        let currCol = PosConversionUtil_1.default.getCol(currPosition);
        return res;
    }
    isMovePossible(from, to, boardState) {
        let possibleMoves = this.possibleMoves(from, boardState);
        return possibleMoves.includes(to);
    }
    static getPiece(code) {
        if (!RootPiece.instance) {
            RootPiece.instance = new RootPiece(code);
        }
        return RootPiece.instance;
    }
    getPieceColor() {
        return this.color;
    }
}
