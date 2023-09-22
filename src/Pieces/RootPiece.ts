
import Piece from "./Pieces";

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

    public possibleMoves(currPosition: string): string[] {
        return []; //need to remove this line latter.
        /*
        let row:number = getRow(currPosition);//we need to define this
        let col:number = getCol(currPosition);//we need to define this
        let res:string[]=[];
        for(let i=row;i<8;i++){
            if(acceptable){
                res.push(getPosition(i,col));
            }
        }
        for(let i=row;i>=0;i--){
            if(acceptable){
                res.push(getPosition(i,col));
            }
        }
        for(let j=col;j<8;j++){
            if(acceptable){
                res.push(getPosition(row,j));
            }
        }
        for(let j=col;j>=0;j--){
            if(acceptable){
                res.push(getPosition(row,j));
            }
        }*/
    }

    public isMovePossible(from: string, to: string): boolean {
        throw new Error("Method not implemented.");
    }

    public static getPiece(code: string): Piece {
        if(!RootPiece.instance){
            RootPiece.instance = new RootPiece(code);
        }
        return RootPiece.instance;
    }

    public getPieceColor(currPosition: string): string {
        return this.color;
    }
}
