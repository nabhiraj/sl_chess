import ChessBoardRep from "./ChessBoardRep";
import Piece from "./Pieces/Pieces";
import Root from "./Pieces/Root";
import SimpleChessBoard from "./SimpleChessBoard";
import Bishop from "./Pieces/Bishop";


let myPiece:Piece = new Bishop('w_bishop');
let boardState:ChessBoardRep = new SimpleChessBoard();
boardState.MovePiece('C1','F5');
let a=myPiece.possibleMoves('F5',boardState);
console.log(a);
console.log(boardState.getJsonRepresentation());