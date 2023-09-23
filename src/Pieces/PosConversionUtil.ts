class PosConvertionUtil{
    public static  getRow(chessPos:string):number{
        return parseInt(chessPos[1])-1;
    }
    public static getCol(chessPos:string):number{
        return chessPos.charCodeAt(0)-'A'.charCodeAt(0);
    }
    public static getChessPos(row:number,col:number):string{
        let res:string='';
        res=res.concat(String.fromCharCode(col+'A'.charCodeAt(0)));
        res=res.concat((row+1).toString());
        return res;
    }
}
export default PosConvertionUtil;