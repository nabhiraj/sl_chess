import ChessBoardRep from "../ChessBoardRep";
import Piece from "./Pieces";
import PosConvertionUtil from "./PosConversionUtil";
class Bishop extends Piece{

    public  constructor(code:string){
        super(code);
    }
     
    public possibleMoves(currPosition: string, boardState: ChessBoardRep): string[] {
        let res:string[]=[];
        let row = PosConvertionUtil.getRow(currPosition);
        let col= PosConvertionUtil.getCol(currPosition);
        for(let i=row+1,j=col+1;i<8 && j<8;i++,j++){
            let currChessPos = PosConvertionUtil.getChessPos(i,j);
            let currChessPieceCode = boardState.getPieceCode(currChessPos); 
            if(currChessPieceCode =='empty'){
                res.push(currChessPos);
            }else{
                let currChessPieceColor = currChessPieceCode[0]=='w'?'white':'black';
                if(this.color != currChessPieceColor){
                    res.push(currChessPos);
                }
                break; 
            }
        }
        for(let i=row+1,j=col-1;i<8 && j>=0;i++,j--){
            let currChessPos = PosConvertionUtil.getChessPos(i,j);
            let currChessPieceCode = boardState.getPieceCode(currChessPos); 
            if(currChessPieceCode =='empty'){
                res.push(currChessPos);
            }else{
                let currChessPieceColor = currChessPieceCode[0]=='w'?'white':'black';
                if(this.color != currChessPieceColor){
                    res.push(currChessPos);
                }
                break; 
            }
        }
        for(let i=row-1,j=col-1;i>=0 && j>=0;i--,j--){
            let currChessPos = PosConvertionUtil.getChessPos(i,j);
            let currChessPieceCode = boardState.getPieceCode(currChessPos); 
            if(currChessPieceCode =='empty'){
                res.push(currChessPos);
            }else{
                let currChessPieceColor = currChessPieceCode[0]=='w'?'white':'black';
                if(this.color != currChessPieceColor){
                    res.push(currChessPos);
                }
                break; 
            }
        }
        for(let i=row-1,j=col+1;i>=0 && j<8;i--,j++){
            let currChessPos = PosConvertionUtil.getChessPos(i,j);
            let currChessPieceCode = boardState.getPieceCode(currChessPos); 
            if(currChessPieceCode =='empty'){
                res.push(currChessPos);
            }else{

                let currChessPieceColor = currChessPieceCode[0]=='w'?'white':'black';
                if(this.color != currChessPieceColor){
                    res.push(currChessPos);
                }
                break; 
            }
        }

        return res;
    }
}

export default Bishop;