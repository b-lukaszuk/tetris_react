import Colors from '../types/Colors';
import Shape from '../types/Shape';
import Square from '../square/Square';

class Tetromino {
  private color: Colors = Colors.BLANK;
  private shapes: Shape[] = [];
  private square: Square | null = null;
  private curShapeId: number = 0;
  // shape's top left corner position in the gamefield grid (in rows and columns)
  private topLeftRowId: number = -3;
  private topLeftColId: number = 3;

  constructor(
    canvas: HTMLCanvasElement,
    color: Colors,
    shapes: Shape[],
    topLeftRowId: number = -3,
    topLeftColId: number = 3
  ) {
    this.color = color;
    this.shapes = shapes;
    this.square = new Square(canvas);
    this.topLeftRowId = topLeftRowId;
    this.topLeftColId = topLeftColId;
  }

  public drawFigure(color: Colors = this.color): void {
    let curShape: Shape = this.shapes[this.curShapeId];
    for (let r = 0; r < curShape.length; r++) {
      for (let c = 0; c < curShape[r].length; c++) {
        if (curShape[r][c] === 1) {
          if (this.square) {
            this.square.drawSquare(this.topLeftRowId + r, this.topLeftColId + c, color);
          }
        }
      }
    }
  }

  private undrawDoTransformationDraw(transformation: () => void) {
    this.drawFigure(Colors.BLANK); // undraw figure
    transformation();
    this.drawFigure();
  }

  public moveDown(): void {
    this.undrawDoTransformationDraw(() => this.topLeftRowId++);
  }

  public moveRight(): void {
    this.undrawDoTransformationDraw(() => this.topLeftColId++);
  }

  public moveLeft(): void {
    this.undrawDoTransformationDraw(() => this.topLeftColId--);
  }

  public rotate(): void {
    this.undrawDoTransformationDraw(() => (this.curShapeId = (this.curShapeId + 1) % this.shapes.length));
  }
}

export default Tetromino;
