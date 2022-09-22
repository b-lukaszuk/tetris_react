import Colors from './Colors';
import Tetromino from './Tetromino';

class TetroL extends Tetromino {
  static color: Colors = Colors.ORANGE;
  static shape: number[][] = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement, topLeftRowLd: number, topLeftColLd: number) {
    super(canvas, TetroL.color, TetroL.shape, topLeftRowLd, topLeftColLd);
  }
}

export default TetroL;
