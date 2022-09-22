import Tetromino from './Tetromino';

class TetroS extends Tetromino {
  static color: string = 'lightgreen';
  static shape: number[][] = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement, topLeftRowSd: number, topLeftColSd: number) {
    super(canvas, TetroS.color, TetroS.shape, topLeftRowSd, topLeftColSd);
  }
}

export default TetroS;
