// it draws a block by indexing the fields like rows and cols like in
// Python's pd.DataFrame object
function drawBlock(canv: HTMLCanvasElement, rowId: number, colId: number,
    color: string = "blue", gridLineWidth: number = 1): void {

    const ctx: CanvasRenderingContext2D | null = canv.getContext("2d");
    // https://tetris.fandom.com/wiki/Tetris_Guideline
    // playfield is 10x20

    const nCols: number = 10;
    const nRows: number = 20;
    const blockWidth: number = canv.width / nCols;
    const blockHeight: number = canv.height / nRows;
    const halfGridLineWidth = gridLineWidth / 2;

    if (!ctx) {
        return undefined;
    }

    ctx.fillStyle = color;
    let xStartPx: number = (rowId * blockHeight); // upper left corner
    let yStartPx: number = (colId * blockWidth); // upper left corner
    ctx.fillRect(yStartPx + halfGridLineWidth, xStartPx + halfGridLineWidth,
        blockWidth - gridLineWidth, blockHeight - gridLineWidth);

}

export default drawBlock;
