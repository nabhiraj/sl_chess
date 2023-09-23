import ChessBoardRep from "../ChessBoardRep";
interface Piece {
    getPieceCode(): string;
    possibleMoves(currPosition: string,boardState: ChessBoardRep): string[];
    isMovePossible(from: string, to: string,boardState: ChessBoardRep): boolean;
    getPieceColor(): string;
}
export default Piece;