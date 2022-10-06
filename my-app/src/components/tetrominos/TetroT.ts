import Colors from '../types/Colors';
import Shape from '../types/Shape';
import Tetromino from './Tetromino';

class TetroT extends Tetromino {
  static color: Colors = Colors.RED;
  static shapes: Shape[] = [
    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ];
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, TetroT.color, TetroT.shapes, -3, 3);
  }
}

export default TetroT;
