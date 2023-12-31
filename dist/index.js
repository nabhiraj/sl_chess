"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Root_1 = __importDefault(require("./Pieces/Root"));
const SimpleChessBoard_1 = __importDefault(require("./SimpleChessBoard"));
let myPiece = Root_1.default.getPiece('w_root');
let boardState = new SimpleChessBoard_1.default();
boardState.MovePiece('A1', 'F5');
let a = myPiece.possibleMoves('F5', boardState);
console.log(a);
