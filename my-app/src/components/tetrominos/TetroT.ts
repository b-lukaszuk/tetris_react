import Colors from './Colors';
import Tetromino from './Tetromino';

class TetroT extends Tetromino {
  static color: Colors = Colors.RED;
  static shape: number[][] = [
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, TetroT.color, TetroT.shape, -3, 3);
  }
}

export default TetroT;
