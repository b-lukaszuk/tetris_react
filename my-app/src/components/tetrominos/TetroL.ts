import Colors from '../types/Colors';
import Shape from '../types/Shape';
import Tetromino from './Tetromino';

class TetroL extends Tetromino {
  static color: Colors = Colors.ORANGE;
  static shapes: Shape[] = [
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ];
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, TetroL.color, TetroL.shapes, -3, 3);
  }
}

export default TetroL;
