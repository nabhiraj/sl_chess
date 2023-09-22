interface Piece {
    getPieceCode(): string;
    possibleMoves(currPosition: string): string[];
    isMovePossible(from: string, to: string): boolean;
    getPieceColor(currPosition: string): string;
}
export default Piece;