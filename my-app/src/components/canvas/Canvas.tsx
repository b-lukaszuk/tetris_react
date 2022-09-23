import { ReactElement, useEffect, useRef } from 'react';

import drawGrid from './draw/drawGrid';
import setCanvasDefaults from './setCanvasDefaults';
import getRandomTetromino from '../tetrominos/getRandomTetromino';
import Tetromino from '../tetrominos/Tetromino';

import './Canvas.css';

const Canvas: React.FC = (): ReactElement<HTMLElement> => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const tetrominoRef = useRef<Tetromino | null>(null);

  const moveDown = (canvas: HTMLCanvasElement | null, tetromino: Tetromino | null) => {
    if (tetromino && canvas) {
      tetromino.moveDown();
      drawGrid(canvas);
    } else {
      console.log('cannot move down');
    }
  };

  const moveRight = (canvas: HTMLCanvasElement | null, tetromino: Tetromino | null) => {
    if (tetromino && canvas) {
      tetromino.moveRight();
      drawGrid(canvas);
    } else {
      console.log('cannot move right');
    }
  };

  const moveLeft = (canvas: HTMLCanvasElement | null, tetromino: Tetromino | null) => {
    if (tetromino && canvas) {
      tetromino.moveLeft();
      drawGrid(canvas);
    } else {
      console.log('cannot move left');
    }
  };

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (canvas === null) {
      return undefined;
    }
    setCanvasDefaults(canvas);
    tetrominoRef.current = getRandomTetromino(canvas);

    tetrominoRef.current.drawFigure();

    drawGrid(canvas);
  }, []);

  return (
    <div>
      <canvas width="500" height="1000" ref={canvasRef} className="canvas" />
      <button onClick={() => moveLeft(canvasRef.current, tetrominoRef.current)}>Move left</button>
      <button onClick={() => moveDown(canvasRef.current, tetrominoRef.current)}>Move down</button>
      <button onClick={() => moveRight(canvasRef.current, tetrominoRef.current)}>Move right</button>
    </div>
  );
};

export default Canvas;
