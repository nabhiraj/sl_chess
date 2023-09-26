import chessBoard from "./chessBoardStructure"
interface ChessBoardControler{
 setupBoard(boardRepresentation: chessBoard): void;
 movePiece(from: string, to: string): void;
 getJsonRepresentation(): chessBoard;
 isJsonRepresentationValid(boardRep: chessBoard): boolean;
 getPosition(pieceCode: string): string[];
 getPieceCode(position: string): string;
}
export default ChessBoardControler;