import Tetromino from './Tetromino';

class TetroL extends Tetromino {
  static shape: number[][] = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement, color: string, topLeftRowLd: number, topLeftColLd: number) {
    super(canvas, color, TetroL.shape, topLeftRowLd, topLeftColLd);
  }
}

export default TetroL;
