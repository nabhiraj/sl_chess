import PosConvertionUtil from "../Pieces/PosConversionUtil";

let row=PosConvertionUtil.getRow('B3');
let col=PosConvertionUtil.getCol('B3');
console.log(row+' '+col);
console.log(PosConvertionUtil.getChessPos(row,col));