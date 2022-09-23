import Colors from './Colors';

class Tetromino {
  private blockHeight: number = 10;
  private blockWidth: number = 10;
  private canvas: HTMLCanvasElement | null = null;
  private color: Colors = Colors.BLANK;
  private ctx: CanvasRenderingContext2D | null = null;
  private shape: number[][] = [];
  // shape's top left corner position in the gamefield grid (in rows and columns)
  private topLeftRowId: number = -3;
  private topLeftColId: number = 3;

  constructor(
    canvas: HTMLCanvasElement,
    color: Colors,
    shape: number[][],
    topLeftRowId: number = -3,
    topLeftColId: number = 3,
    blockWidth: number = 50,
    blockHeight: number = 50
  ) {
    this.canvas = canvas;
    this.ctx = canvas ? this.canvas.getContext('2d') : null;
    this.color = color;
    this.blockWidth = blockWidth;
    this.blockHeight = blockHeight;
    this.shape = shape;
    this.topLeftRowId = topLeftRowId;
    this.topLeftColId = topLeftColId;
  }

  private drawSquare(rowId: number, colId: number, color: string): void {
    if (!this.ctx) {
      return undefined;
    }
    this.ctx.fillStyle = color;
    let xStartPx: number = rowId * this.blockHeight;
    let yStartPx = colId * this.blockWidth;
    this.ctx.fillRect(yStartPx, xStartPx, this.blockWidth, this.blockHeight);
  }

  public drawFigure(color: Colors = this.color): void {
    for (let r = 0; r < this.shape.length; r++) {
      for (let c = 0; c < this.shape[r].length; c++) {
        if (this.shape[r][c] === 1) {
          this.drawSquare(this.topLeftRowId + r, this.topLeftColId + c, color);
        }
      }
    }
  }

  public moveDown(): void {
    this.drawFigure(Colors.BLANK); // undraw figure
    this.topLeftRowId++;
    this.drawFigure();
  }
}

export default Tetromino;
