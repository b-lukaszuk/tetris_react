import Colors from './Colors';
import Shape from './Shape';
import Tetromino from './Tetromino';

class TetroS extends Tetromino {
  static color: Colors = Colors.GREEN;
  static shape: Shape = [
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, TetroS.color, TetroS.shape, -3, 3);
  }
}

export default TetroS;
