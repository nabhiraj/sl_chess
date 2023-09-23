"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inisialBoardStatus_1 = __importDefault(require("./inisialBoardStatus"));
class SimpleChessBoard {
    constructor() {
        this.positionToPiece = new Map();
        this.board = inisialBoardStatus_1.default; //this we have to fix.
        this.drawBoard(this.board);
    }
    drawBoard(board) {
        this.board = board;
        this.positionToPiece.clear();
        let pieceList = Object.keys(board);
        pieceList.forEach((piece) => {
            let allPositions = board[piece];
            allPositions.forEach((poss) => {
                this.positionToPiece.set(poss, piece);
            });
        });
    }
    MovePiece(from, to) {
        //right now i will not be checking the move is legal or not.
        let pieceCode = this.getPieceCode(from);
        this.board[pieceCode] = this.board[pieceCode].filter(x => x != from);
        this.board[pieceCode].push(to);
        this.drawBoard(this.board);
    }
    getJsonRepresentation() {
        return this.board;
    }
    isJsonRepresentationValid(boardRep) {
        return true;
    }
    getPosition(pieceCode) {
        return this.board[pieceCode];
    }
    getPieceCode(position) {
        if (this.positionToPiece.has(position)) {
            return this.positionToPiece.get(position);
        }
        else {
            return 'empty';
        }
    }
}
exports.default = SimpleChessBoard;
