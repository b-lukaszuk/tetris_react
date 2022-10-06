import Colors from '../types/Colors';
import Shape from '../types/Shape';
import Tetromino from './Tetromino';

class TetroS extends Tetromino {
  static color: Colors = Colors.GREEN;
  static shapes: Shape[] = [
    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 1],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ];
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, TetroS.color, TetroS.shapes, -3, 3);
  }
}

export default TetroS;
