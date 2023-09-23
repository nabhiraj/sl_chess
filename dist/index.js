"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PosConversionUtil_1 = __importDefault(require("./Pieces/PosConversionUtil"));
let row = PosConversionUtil_1.default.getRow('B3');
let col = PosConversionUtil_1.default.getCol('B3');
console.log(row + ' ' + col);
console.log(PosConversionUtil_1.default.getChessPos(row, col));
