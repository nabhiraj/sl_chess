import ChessBoardControler from "../ChessBoardControler";
import PieceFetcher from "./PieceFetcher";
import Piece from "./Pieces";

class Queen extends Piece{
    public constructor(code: string){
        super(code);
    }
    //will test after some time
    public possibleMoves(currPosition: string, boardState: ChessBoardControler): string[] {
        let root:Piece;
        let bishop:Piece;
        if(this.getPieceCode()[0]=='w'){//i.e this is a white queen.
            root = PieceFetcher.getPiece('w_root');
            bishop = PieceFetcher.getPiece('w_bishop');
        }else{//i.e this is a black queen.
            root = PieceFetcher.getPiece('b_root');
            bishop = PieceFetcher.getPiece('b_bishop');
        }
        let rootMoves = root.possibleMoves(currPosition,boardState);
        let bishopMoves = bishop.possibleMoves(currPosition,boardState);
       return [...rootMoves,...bishopMoves]; 
    }
}

export default Queen;