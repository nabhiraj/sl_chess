import ChessBoardRep from "./ChessBoardControler";
import Piece from "./Pieces/Pieces";
import Root from "./Pieces/Root";
import SimpleChessBoard from "./SimpleChessBoardControler";
import Bishop from "./Pieces/Bishop";
import PieceFetcher from "./Pieces/PieceFetcher";
/*
let myPiece:Piece = PieceFetcher.getPiece('b_root');
let boardState:ChessBoardRep = new SimpleChessBoard();
boardState.MovePiece('C1','F5');
let a=myPiece.possibleMoves('F5',boardState);
console.log(a);
console.log(boardState.getJsonRepresentation());
*/
let a = {a:5,b:6};
function abc(a:any):void{
    a=10;//{a:10,b:10}; //works exactly like java
}
abc(a);
console.log(a);