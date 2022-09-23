import Tetromino from './Tetromino';
import TetroI from './TetroI';
import TetroL from './TetroL';
import TetroO from './TetroO';
import TetroS from './TetroS';
import TetroT from './TetroT';

function getRandInt(minIncl: number, maxExcl: number) {
  return Math.floor(Math.random() * (maxExcl - minIncl)) + minIncl;
}

function getRandomTetromino(canvas: HTMLCanvasElement): Tetromino {
  const choice: number = getRandInt(0, 5);
  switch (choice) {
    case 0:
      return new TetroI(canvas);
    case 1:
      return new TetroL(canvas);
    case 2:
      return new TetroO(canvas);
    case 3:
      return new TetroS(canvas);
    case 4:
      return new TetroT(canvas);
    default:
      return new TetroI(canvas);
  }
}

export default getRandomTetromino;
