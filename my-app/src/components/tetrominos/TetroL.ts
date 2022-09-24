import Colors from './Colors';
import Shape from './Shape';
import Tetromino from './Tetromino';

class TetroL extends Tetromino {
  static color: Colors = Colors.ORANGE;
  static shape: Shape = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, TetroL.color, TetroL.shape, -3, 3);
  }
}

export default TetroL;
