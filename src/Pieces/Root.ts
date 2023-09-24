
import Piece from "./Pieces";
import ChessBoardRep from "../ChessBoardRep";
import PosConvertionUtil from "./PosConversionUtil";

class Root extends Piece {

    public constructor(code: string) {
        super(code);
    }

    public possibleMoves(currPosition: string, boardState: ChessBoardRep): string[] {
        let res: string[] = [];
        let currRow = PosConvertionUtil.getRow(currPosition);
        let currCol = PosConvertionUtil.getCol(currPosition);
        for (let i = currRow + 1; i < 8; i++) {
            let pieceAtBlock = boardState.getPieceCode(PosConvertionUtil.getChessPos(i, currCol));
            if (pieceAtBlock == 'empty') {
                res.push(PosConvertionUtil.getChessPos(i, currCol));
            } else {
                let pieceAtBlockColor = pieceAtBlock[0] == 'w' ? 'white' : 'black';
                if (pieceAtBlockColor != this.color) {
                    res.push(PosConvertionUtil.getChessPos(i, currCol));
                }
                break;
            }
        }
        for (let i = currRow - 1; i >= 0; i--) {
            let pieceAtBlock = boardState.getPieceCode(PosConvertionUtil.getChessPos(i, currCol));
            if (pieceAtBlock == 'empty') {
                res.push(PosConvertionUtil.getChessPos(i, currCol));
            } else {
                let pieceAtBlockColor = pieceAtBlock[0] == 'w' ? 'white' : 'black';
                if (pieceAtBlockColor != this.color) {
                    res.push(PosConvertionUtil.getChessPos(i, currCol));
                }
                break;
            }
        }
        for (let j = currCol + 1; j < 8; j++) {
            let pieceAtBlock = boardState.getPieceCode(PosConvertionUtil.getChessPos(currRow, j));
            if (pieceAtBlock == 'empty') {
                res.push(PosConvertionUtil.getChessPos(currRow, j));
            } else {
                let pieceAtBlockColor = pieceAtBlock[0] == 'w' ? 'white' : 'black';
                if (pieceAtBlockColor != this.color) {
                    res.push(PosConvertionUtil.getChessPos(currRow, j));
                }
                break;
            }
        }
        for (let j = currCol - 1; j >= 0; j--) {
            let pieceAtBlock = boardState.getPieceCode(PosConvertionUtil.getChessPos(currRow, j));
            if (pieceAtBlock == 'empty') {
                res.push(PosConvertionUtil.getChessPos(currRow, j));
            } else {
                let pieceAtBlockColor = pieceAtBlock[0] == 'w' ? 'white' : 'black';
                if (pieceAtBlockColor != this.color) {
                    res.push(PosConvertionUtil.getChessPos(currRow, j));
                }
                break;
            }
        }
        return res;
    }

}

export default Root;
