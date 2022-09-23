import Colors from './Colors';
import Tetromino from './Tetromino';

class TetroO extends Tetromino {
  static color: Colors = Colors.YELLOW;
  static shape: number[][] = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, TetroO.color, TetroO.shape, -3, 3);
  }
}

export default TetroO;
