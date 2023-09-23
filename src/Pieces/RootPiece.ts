
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

    public isMovePossible(from: string, to: string, boardState: ChessBoardRep): boolean {
        let possibleMoves = this.possibleMoves(from, boardState);
        return possibleMoves.includes(to);
    }

    public static getPiece(code: string): Piece {
        if (!RootPiece.instance) {
            RootPiece.instance = new RootPiece(code);
        }
        return RootPiece.instance;
    }

    public getPieceColor(): string {
        return this.color;
    }
}

export default RootPiece;
