import { ReactElement, useEffect, useRef } from 'react';

import GameField from '../gameField/GameField';
import getRandomTetromino from '../tetrominos/getRandomTetromino';
import setCanvasDefaults from './setCanvasDefaults';
import Tetromino from '../tetrominos/Tetromino';

import './Canvas.css';

const Canvas: React.FC = (): ReactElement<HTMLElement> => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const tetrominoRef = useRef<Tetromino | null>(null);
  const gameFieldRef = useRef<GameField | null>(null);

  const getNewTetromino = (canvas: HTMLCanvasElement | null) => {
    if (canvas) {
      tetrominoRef.current = getRandomTetromino(canvas);
    } else {
      console.log('no canvas no tetromino');
    }
  };

  const moveDown = (canvas: HTMLCanvasElement | null, tetromino: Tetromino | null) => {
    if (tetromino && canvas) {
      tetromino.moveDown();
      gameFieldRef.current?.drawGameField();
    } else {
      console.log('cannot move down');
    }
  };

  const moveRight = (canvas: HTMLCanvasElement | null, tetromino: Tetromino | null) => {
    if (tetromino && canvas) {
      tetromino.moveRight();
      gameFieldRef.current?.drawGameField();
    } else {
      console.log('cannot move right');
    }
  };

  const moveLeft = (canvas: HTMLCanvasElement | null, tetromino: Tetromino | null) => {
    if (tetromino && canvas) {
      tetromino.moveLeft();
      gameFieldRef.current?.drawGameField();
    } else {
      console.log('cannot move left');
    }
  };

  const rotateFigure = (canvas: HTMLCanvasElement | null, tetromino: Tetromino | null) => {
    if (tetromino && canvas) {
      tetromino.rotate();
      gameFieldRef.current?.drawGameField();
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
    gameFieldRef.current = new GameField(canvas);

    tetrominoRef.current.drawFigure();
    gameFieldRef.current.drawGameField();
  }, []);

  return (
    <div>
      <canvas width="500" height="1000" ref={canvasRef} className="canvas" />
      <br />
      <button onClick={() => getNewTetromino(canvasRef.current)}>Get random tetromino</button>
      <br />
      <button onClick={() => moveLeft(canvasRef.current, tetrominoRef.current)}>Move left</button>
      <button onClick={() => moveDown(canvasRef.current, tetrominoRef.current)}>Move down</button>
      <button onClick={() => moveRight(canvasRef.current, tetrominoRef.current)}>Move right</button>
      <button onClick={() => rotateFigure(canvasRef.current, tetrominoRef.current)}>Rotate</button>
    </div>
  );
};

export default Canvas;
