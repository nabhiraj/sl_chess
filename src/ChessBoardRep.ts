import chessBoard from "./chessBoardStructure"
interface ChessBoardRep{
 drawBoard(boardRepresentation: chessBoard): void;
 MovePiece(from: string, to: string): void;
 getJsonRepresentation(): chessBoard;
 isJsonRepresentationValid(boardRep: chessBoard): boolean;
 getPosition(pieceCode: string): string[];
 getPieceCode(position: string): string;
}
export default ChessBoardRep;