import Colors from '../types/Colors';
import Shape from '../types/Shape';
import Tetromino from './Tetromino';

class TetroO extends Tetromino {
  static color: Colors = Colors.YELLOW;
  static shapes: Shape[] = [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  ];
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, TetroO.color, TetroO.shapes, -3, 3);
  }
}

export default TetroO;
