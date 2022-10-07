class Square {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private blockWidth: number = 50;
  private blockHeight: number = 50;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas ? this.canvas.getContext('2d') : null;
  }

  public drawSquare(rowId: number, colId: number, color: string): void {
    if (!this.ctx) {
      return undefined;
    }
    this.ctx.fillStyle = color;
    let xStartPx: number = rowId * this.blockHeight;
    let yStartPx = colId * this.blockWidth;
    this.ctx.fillRect(yStartPx, xStartPx, this.blockWidth, this.blockHeight);
  }
}

export default Square;
