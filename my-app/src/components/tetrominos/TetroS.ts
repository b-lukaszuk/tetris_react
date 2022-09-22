import Tetromino from './Tetromino';

class TetroS extends Tetromino {
  static shape: number[][] = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement, color: string, topLeftRowSd: number, topLeftColSd: number) {
    super(canvas, color, TetroS.shape, topLeftRowSd, topLeftColSd);
  }
}

export default TetroS;
