import Colors from './Colors';
import Tetromino from './Tetromino';

class TetroI extends Tetromino {
  static color: Colors = Colors.BLUE;
  static shape: number[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement, topLeftRowId: number, topLeftColId: number) {
    super(canvas, TetroI.color, TetroI.shape, topLeftRowId, topLeftColId);
  }
}

export default TetroI;
