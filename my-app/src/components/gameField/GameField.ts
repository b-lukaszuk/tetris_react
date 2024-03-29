import Colors from '../types/Colors';
import Square from '../square/Square';
import Tetromino from '../tetrominos/Tetromino';

class GameField {
  private gameField: Colors[][] = [];
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private square: Square | null = null;

  // https://tetris.fandom.com/wiki/Tetris_Guideline
  // playfield is 10x20
  private nRows: number = 20;
  private nCols: number = 10;

  constructor(canvas: HTMLCanvasElement) {
    this.initializeGameField();
    this.canvas = canvas;
    this.ctx = canvas ? this.canvas.getContext('2d') : null;
    this.square = new Square(canvas);
  }

  private initializeGameField(): void {
    for (let r = 0; r < this.nRows; r++) {
      let row: Colors[] = [];
      for (let c = 0; c < this.nCols; c++) {
        row.push(Colors.BLANK);
      }
      this.gameField.push(row);
    }
  }
  public isColision(tetromino: Tetromino): boolean {
    for (let r = 0; r < this.gameField.length; r++) {
      for (let c = 0; c < this.gameField[r].length; c++) {
        if (this.gameField[r][c] !== Colors.BLANK && tetromino.isFieldTaken(r, c)) {
          return true;
        }
      }
    }
    return false;
  }

  public lockTetromiono(tetromino: Tetromino): void {
    for (let r = 0; r < this.gameField.length; r++) {
      for (let c = 0; c < this.gameField[r].length; c++) {
        if (this.gameField[r][c] === Colors.BLANK && tetromino.isFieldTaken(r, c)) {
          this.gameField[r][c] = tetromino.getColor();
        }
      }
    }
  }

  private drawGrid(): void {
    let curX: number = 0;
    let curY: number = 0;
    const lineWidth: number = 1;
    if (!this.canvas) {
      return undefined;
    }
    const colWidth: number = this.canvas.width / this.nCols;
    const rowHeight: number = this.canvas.height / this.nRows;
    if (!this.ctx) {
      return undefined;
    }

    this.ctx.beginPath();
    for (let c = 0; c < this.nCols; c++) {
      this.ctx.moveTo(curX - lineWidth / 2, 0);
      this.ctx.lineTo(curX - lineWidth / 2, this.canvas.height);
      this.ctx.stroke();
      curX += colWidth;
    }
    this.ctx.beginPath();
    for (let r = 0; r < this.nRows; r++) {
      this.ctx.moveTo(0, curY - lineWidth / 2);
      this.ctx.lineTo(this.canvas.width, curY - lineWidth / 2);
      this.ctx.stroke();
      curY += rowHeight;
    }
  }

  public drawGameField(): void {
    for (let r = 0; r < this.gameField.length; r++) {
      for (let c = 0; c < this.gameField[r].length; c++) {
        if (this.gameField[r][c] !== Colors.BLANK) {
          if (this.square) {
            this.square.drawSquare(r, c, this.gameField[r][c]);
          }
        }
      }
    }
    this.drawGrid();
  }
}

export default GameField;
