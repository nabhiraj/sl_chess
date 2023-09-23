import ChessBoardRep from "./ChessBoardRep";
import Piece from "./Pieces/Pieces";
import RootPiece from "./Pieces/RootPiece";
import SimpleChessBoard from "./SimpleChessBoard";


let myPiece:Piece = RootPiece.getPiece('w_root');
let boardState:ChessBoardRep = new SimpleChessBoard();
boardState.MovePiece('A1','F5');
let a=myPiece.possibleMoves('F5',boardState);
console.log(a);