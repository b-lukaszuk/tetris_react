import Tetromino from './Tetromino';

class TetroO extends Tetromino {
  static shape: number[][] = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement, color: string, topLeftRowId: number, topLeftColId: number) {
    super(canvas, color, TetroO.shape, topLeftRowId, topLeftColId);
  }
}

export default TetroO;
