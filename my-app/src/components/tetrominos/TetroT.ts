import Colors from './Colors';
import Tetromino from './Tetromino';

class TetroT extends Tetromino {
  static color: Colors = Colors.RED;
  static shape: number[][] = [
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ];
  constructor(canvas: HTMLCanvasElement, topLeftRowTd: number, topLeftColTd: number) {
    super(canvas, TetroT.color, TetroT.shape, topLeftRowTd, topLeftColTd);
  }
}

export default TetroT;
