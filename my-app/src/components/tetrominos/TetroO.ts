import Colors from './Colors';
import Shape from './Shape';
import Tetromino from './Tetromino';

class TetroO extends Tetromino {
  static color: Colors = Colors.YELLOW;
  static shape: Shape = [
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
