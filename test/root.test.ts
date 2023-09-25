import ChessBoardControler from "../src/ChessBoardControler";
import SimpleChessBoardControler from "../src/SimpleChessBoardControler";
import inisialBoardState from "../src/inisialBoardStatus";

describe('testing chess board Controler',function(){
    function getControler(){
        let controler = new SimpleChessBoardControler();
        controler.setupBoard(inisialBoardState);
        console.log('inisializing a new controler',JSON.stringify(controler.getJsonRepresentation()));
        return controler;
    }
    it('moving first white pawn',function(){
        let controler=getControler();
        controler.MovePiece('C2','C3');
        expect(controler.getPieceCode('C3')).toEqual('w_pawn');
        expect(controler.getPieceCode('C2')).toEqual('empty');
    });
    it('moving first balck pawn',function(){
        let controler=getControler();
        controler.MovePiece('C7','C6');
        expect(controler.getPieceCode('C6')).toEqual('b_pawn');
        expect(controler.getPieceCode('C7')).toEqual('empty');
    });
    it('getting position of a piece',function(){
        let controler=getControler();
        controler.MovePiece('C2','C3');
        let res = controler.getPosition('w_pawn');
        expect(res.includes('C3')).toBeTruthy();

    });
});