import { ReactElement, useEffect, useRef } from 'react';

import drawGrid from './draw/drawGrid';
import setCanvasDefaults from './setCanvasDefaults';
import Tetromino from '../tetrominos/Tetromino';

import './Canvas.css';

const Canvas: React.FC = (): ReactElement<HTMLElement> => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const tetrominoRef = useRef<Tetromino | null>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (canvas === null) {
      return undefined;
    }
    setCanvasDefaults(canvas);
    tetrominoRef.current = new Tetromino(canvas, 'yellow');

    tetrominoRef.current.drawFigure();

    drawGrid(canvas);
  }, []);

  return (
    <div>
      <canvas width="500" height="1000" ref={canvasRef} className="canvas" />
    </div>
  );
};

export default Canvas;
