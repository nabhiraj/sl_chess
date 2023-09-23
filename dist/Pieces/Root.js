"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pieces_1 = __importDefault(require("./Pieces"));
const PosConversionUtil_1 = __importDefault(require("./PosConversionUtil"));
class Root extends Pieces_1.default {
    constructor(code) {
        super(code);
    }
    static getPiece(code) {
        if (!Root.instance) {
            Root.instance = new Root(code);
        }
        return Root.instance;
    }
    possibleMoves(currPosition, boardState) {
        let res = [];
        let currRow = PosConversionUtil_1.default.getRow(currPosition);
        let currCol = PosConversionUtil_1.default.getCol(currPosition);
        for (let i = currRow + 1; i < 8; i++) {
            let pieceAtBlock = boardState.getPieceCode(PosConversionUtil_1.default.getChessPos(i, currCol));
            if (pieceAtBlock == 'empty') {
                res.push(PosConversionUtil_1.default.getChessPos(i, currCol));
            }
            else {
                let pieceAtBlockColor = pieceAtBlock[0] == 'w' ? 'white' : 'black';
                if (pieceAtBlockColor != this.color) {
                    res.push(PosConversionUtil_1.default.getChessPos(i, currCol));
                }
                break;
            }
        }
        for (let i = currRow - 1; i >= 0; i--) {
            let pieceAtBlock = boardState.getPieceCode(PosConversionUtil_1.default.getChessPos(i, currCol));
            if (pieceAtBlock == 'empty') {
                res.push(PosConversionUtil_1.default.getChessPos(i, currCol));
            }
            else {
                let pieceAtBlockColor = pieceAtBlock[0] == 'w' ? 'white' : 'black';
                if (pieceAtBlockColor != this.color) {
                    res.push(PosConversionUtil_1.default.getChessPos(i, currCol));
                }
                break;
            }
        }
        for (let j = currCol + 1; j < 8; j++) {
            let pieceAtBlock = boardState.getPieceCode(PosConversionUtil_1.default.getChessPos(currRow, j));
            if (pieceAtBlock == 'empty') {
                res.push(PosConversionUtil_1.default.getChessPos(currRow, j));
            }
            else {
                let pieceAtBlockColor = pieceAtBlock[0] == 'w' ? 'white' : 'black';
                if (pieceAtBlockColor != this.color) {
                    res.push(PosConversionUtil_1.default.getChessPos(currRow, j));
                }
                break;
            }
        }
        for (let j = currCol - 1; j >= 0; j--) {
            let pieceAtBlock = boardState.getPieceCode(PosConversionUtil_1.default.getChessPos(currRow, j));
            if (pieceAtBlock == 'empty') {
                res.push(PosConversionUtil_1.default.getChessPos(currRow, j));
            }
            else {
                let pieceAtBlockColor = pieceAtBlock[0] == 'w' ? 'white' : 'black';
                if (pieceAtBlockColor != this.color) {
                    res.push(PosConversionUtil_1.default.getChessPos(currRow, j));
                }
                break;
            }
        }
        return res;
    }
}
exports.default = Root;
