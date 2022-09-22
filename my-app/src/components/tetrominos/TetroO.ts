import Tetromino from './Tetromino';

class TetroO extends Tetromino {
  static color: string = 'yellow';
  static shape: number[][] = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement, topLeftRowId: number, topLeftColId: number) {
    super(canvas, TetroO.color, TetroO.shape, topLeftRowId, topLeftColId);
  }
}

export default TetroO;
