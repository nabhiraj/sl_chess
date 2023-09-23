"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PosConvertionUtil {
    static getRow(chessPos) {
        return parseInt(chessPos[1]) - 1;
    }
    static getCol(chessPos) {
        return chessPos.charCodeAt(0) - 'A'.charCodeAt(0);
    }
    static getChessPos(row, col) {
        let res = '';
        res = res.concat(String.fromCharCode(col + 'A'.charCodeAt(0)));
        res = res.concat((row + 1).toString());
        return res;
    }
}
exports.default = PosConvertionUtil;
