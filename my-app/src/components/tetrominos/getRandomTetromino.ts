import Tetromino from './Tetromino';
import TetroI from './TetroI';
import TetroL from './TetroL';
import TetroO from './TetroO';
import TetroS from './TetroS';
import TetroT from './TetroT';

function getRandInt(minIncl: number, maxExcl: number) {
  return Math.floor(Math.random() * (maxExcl - minIncl)) + minIncl;
}

function getRandomTetromino(canvas: HTMLCanvasElement, topLeftRowId: number, topLeftColId: number): Tetromino {
  const choice: number = getRandInt(0, 5);
  switch (choice) {
    case 0:
      return new TetroI(canvas, topLeftRowId, topLeftColId);
    case 1:
      return new TetroL(canvas, topLeftRowId, topLeftColId);
    case 2:
      return new TetroO(canvas, topLeftRowId, topLeftColId);
    case 3:
      return new TetroS(canvas, topLeftRowId, topLeftColId);
    case 4:
      return new TetroT(canvas, topLeftRowId, topLeftColId);
    default:
      return new TetroI(canvas, topLeftRowId, topLeftColId);
  }
}

export default getRandomTetromino;
