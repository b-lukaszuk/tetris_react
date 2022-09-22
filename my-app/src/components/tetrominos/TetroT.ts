import Tetromino from './Tetromino';

class TetroT extends Tetromino {
  static shape: number[][] = [
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement, color: string, topLeftRowTd: number, topLeftColTd: number) {
    super(canvas, color, TetroT.shape, topLeftRowTd, topLeftColTd);
  }
}

export default TetroT;
