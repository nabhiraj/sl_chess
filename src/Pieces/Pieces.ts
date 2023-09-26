import ChessBoardRep from "../ChessBoardControler";
abstract class Piece {
    private code: string;
    protected color: string;

    public abstract possibleMoves(currPosition: string, boardState: ChessBoardRep): string[]

    public constructor(code: string) {
        this.code = code;
        this.color = code[0] === 'w' ? 'white' : 'black';
    }

    public getPieceCode(): string {
        return this.code;
    }
        
    public isMovePossible(from: string, to: string, boardState: ChessBoardRep): boolean {
        let possibleMoves = this.possibleMoves(from, boardState);
        return possibleMoves.includes(to);
    }

    public getPieceColor(): string {
        return this.color;
    }
}
export default Piece;