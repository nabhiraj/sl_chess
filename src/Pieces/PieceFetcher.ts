import Root from "./Root";
import Bishop from "./Bishop";
import Piece from "./Pieces";
class PieceFetcher{
    private static pieceMap:Map<string,Piece> = new Map();
    public static getPiece(code:string):Piece{
        if(this.pieceMap.has(code)){
            return this.pieceMap.get(code) as Piece;
        }
        let res:Piece;
        switch(code){
            case 'w_root':
                res = new Root('w_root');
                this.pieceMap.set('w_root',res);
                break;
            case 'b_root':
                res = new Root('b_root');
                this.pieceMap.set('b_root',res);
                break;
            case 'w_bishop':
                res = new Bishop('w_bishop');
                this.pieceMap.set('w_bishop',res);
                break;
            case 'b_bishop':
                res = new Bishop('b_bishop');
                this.pieceMap.set('b_bishop',res);
                break;
            default:
                throw 'wrong code provided';
        }
        return res;
    }
}

export default PieceFetcher;