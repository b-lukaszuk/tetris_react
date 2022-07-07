function drawGrid(canv: HTMLCanvasElement, color: string = "darkgray"): void {
    const ctx: CanvasRenderingContext2D | null = canv.getContext("2d");
    // https://tetris.fandom.com/wiki/Tetris_Guideline
    // playfield is 10x20
    let curX: number = 0;
    let curY: number = 0;
    const nCols: number = 10;
    const nRows: number = 20;
    const colWidth: number = canv.width / nCols;
    const rowHeight: number = canv.height / nRows;
    const lineWidth: number = 1;
    if (!ctx) {
        return undefined;
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath()
    for (let c = 0; c < nCols; c++) {
        ctx.moveTo(curX - (lineWidth / 2), 0);
        ctx.lineTo(curX - (lineWidth / 2), canv.height);
        ctx.stroke();
        curX += colWidth;
    }
    ctx.beginPath()
    for (let r = 0; r < nRows; r++) {
        ctx.moveTo(0, curY - (lineWidth / 2));
        ctx.lineTo(canv.width, curY - (lineWidth / 2));
        ctx.stroke();
        curY += rowHeight;
    }
}

export default drawGrid;
