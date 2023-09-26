import PieceFetcher from "../src/Pieces/PieceFetcher";
import SimpleChessBoardControler from "../src/SimpleChessBoardControler";
import inisialBoardState from "../src/inisialBoardStatus";

describe('testing the moves of quenn',function(){
    it('moves of the white queen',function(){
        let boardController = new SimpleChessBoardControler();
        boardController.setupBoard(inisialBoardState);
        boardController.movePiece('E2','E4');
        boardController.movePiece('D1','F3');
        expect(PieceFetcher.getPiece('w_queen').isMovePossible('F3','H5',boardController)).toBeTruthy();
        boardController.movePiece('F3','F6');
        boardController.movePiece('E7','E6');
        expect(PieceFetcher.getPiece('w_queen').isMovePossible('F6','D8',boardController)).toBeTruthy();
        expect(PieceFetcher.getPiece('w_queen').isMovePossible('F6','D5',boardController)).toBeFalsy();
        expect(PieceFetcher.getPiece('w_queen').isMovePossible('F6','F5',boardController)).toBeTruthy();
    });
    it('moves of black queen',function(){
        let boardController = new SimpleChessBoardControler();
        boardController.setupBoard(inisialBoardState);
        expect(PieceFetcher.getPiece('b_queen').possibleMoves('D8',boardController).length).toEqual(0);
        boardController.movePiece('D7','D6');
        expect(PieceFetcher.getPiece('b_queen').possibleMoves('D8',boardController)[0]).toEqual('D7');
    });
});