import Colors from '../types/Colors';
import Shape from '../types/Shape';
import Tetromino from './Tetromino';

class TetroI extends Tetromino {
  static color: Colors = Colors.BLUE;
  static shapes: Shape[] = [
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
  ];
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, TetroI.color, TetroI.shapes, -3, 3);
  }
}

export default TetroI;
