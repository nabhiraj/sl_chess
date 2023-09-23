"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RootPiece {
    constructor(code) {
        this.code = code;
        this.color = code[0] === 'w' ? 'white' : 'black';
    }
    getPieceCode() {
        return this.code;
    }
    possibleMoves(currPosition) {
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
    isMovePossible(from, to) {
        throw new Error("Method not implemented.");
    }
    static getPiece(code) {
        if (!RootPiece.instance) {
            RootPiece.instance = new RootPiece(code);
        }
        return RootPiece.instance;
    }
    getPieceColor(currPosition) {
        return this.color;
    }
}
