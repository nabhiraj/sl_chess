"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleChessBoard_1 = __importDefault(require("../SimpleChessBoard"));
let a = new SimpleChessBoard_1.default();
//console.log(a.getJsonRepresentation());
/*
let temp:chessBoard = {
    w_pawn: [
      'B2', 'C2',
      'D2', 'E2', 'F2',
      'G2', 'H2'
    ],
    w_knight: [ 'B1', 'G1' ],
    w_root: [ 'A1', 'H1' ],
    w_bishop: [ 'C1', 'F1' ],
    w_queen: [ 'D1' ],
    w_king: [ 'E1' ],
    b_pawn: [
      'A7', 'B7', 'C7',
      'D7', 'E7', 'F7',
      'G7', 'H7'
    ],
    b_knight: [ 'B8', 'G8' ],
    b_root: [ 'A8', 'H8' ],
    b_bishop: [ 'C8', 'F8' ],
    b_queen: [ 'D8' ],
    b_king: [ 'E8' ]
  };
a.drawBoard(temp);
console.log(a.getJsonRepresentation());
*/
//console.log(a.getPieceCode('D8'));
//now we will move the piece
a.MovePiece('A7', 'A6');
console.log(a.getJsonRepresentation());
