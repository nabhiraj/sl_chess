import ChessBoardRep from "./ChessBoardRep";
import chessBoard from "./chessBoardStructure";
import inisialBoardState from "./inisialBoardStatus";

class SimpleChessBoard implements ChessBoardRep{
    private positionToPiece:Map<string,string>;
    private board:chessBoard;
    
    constructor(){
        this.positionToPiece = new Map();
        this.board=inisialBoardState;//this we have to fix.
        this.drawBoard(this.board);
    }
    
    public drawBoard(board: chessBoard): void {
        this.board = board;
        this.positionToPiece.clear();
        let pieceList = Object.keys(board);
        pieceList.forEach((piece)=>{
            let allPositions = board[piece as keyof typeof board];
            allPositions.forEach((poss)=>{
                this.positionToPiece.set(poss,piece);
            });
        });
    }
    
    public MovePiece(from: string, to: string): void {
        //right now i will not be checking the move is legal or not.
        this.positionToPiece.clear();
        let pieceCode: string = this.getPieceCode(from);
        this.board[pieceCode as keyof typeof this.board] = this.board[pieceCode as keyof typeof this.board].filter(x=>x!=from);
        this.board[pieceCode as keyof typeof this.board].push(to);
        this.drawBoard(this.board);
    }
    
    public getJsonRepresentation(): chessBoard {
        return this.board;
    }
    
    public isJsonRepresentationValid(boardRep: chessBoard): boolean {
        return true;
    }
    
    public getPosition(pieceCode: string): string[] {
        return this.board[pieceCode as keyof typeof this.board];
    }
    
    public getPieceCode(position: string): string {
        if(this.positionToPiece.has(position)){
            return this.positionToPiece.get(position) as string;
        }else{
            return 'empty';
        }
    }
}