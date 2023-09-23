import ChessBoardRep from "../ChessBoardRep";
import Piece from "./Pieces";
class Bisop extends Piece{
    constructor(code:string){
        super(code);
    }
    public possibleMoves(currPosition: string, boardState: ChessBoardRep): string[] {
        throw new Error("Method not implemented.");
    }
    
}