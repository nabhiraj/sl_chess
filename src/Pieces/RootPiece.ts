
import Piece from "./Pieces";
import ChessBoardRep from "../ChessBoardRep";
import PosConvertionUtil from "./PosConversionUtil";

class RootPiece implements Piece {
    private static instance: Piece;
    private code: string;
    private color: string;

    private constructor(code: string) {
        this.code = code;
        this.color = code[0] === 'w' ? 'white' : 'black';
    }

    public getPieceCode(): string {
        return this.code;
    }

    public possibleMoves(currPosition: string,boardState: ChessBoardRep): string[] {
       let res:string[]=[];
       let currRow=PosConvertionUtil.getRow(currPosition);
       let currCol=PosConvertionUtil.getCol(currPosition);
       
       return res;
    }

    public isMovePossible(from: string, to: string,boardState: ChessBoardRep): boolean {
        let possibleMoves = this.possibleMoves(from,boardState);
        return possibleMoves.includes(to);
    }

    public static getPiece(code: string): Piece {
        if(!RootPiece.instance){
            RootPiece.instance = new RootPiece(code);
        }
        return RootPiece.instance;
    }

    public getPieceColor(): string {
        return this.color;
    }
}
