import Colors from './Colors';
import Tetromino from './Tetromino';

class TetroS extends Tetromino {
  static color: Colors = Colors.GREEN;
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
