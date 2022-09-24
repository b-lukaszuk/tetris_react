import Colors from './Colors';
import Shape from './Shape';
import Tetromino from './Tetromino';

class TetroI extends Tetromino {
  static color: Colors = Colors.BLUE;
  static shape: Shape = [
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
