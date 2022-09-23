import Colors from './Colors';
import Tetromino from './Tetromino';

class TetroI extends Tetromino {
  static color: Colors = Colors.BLUE;
  static shape: number[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, TetroI.color, TetroI.shape, -3, 3);
  }
}

export default TetroI;
