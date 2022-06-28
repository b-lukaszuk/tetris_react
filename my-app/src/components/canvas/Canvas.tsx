import { ReactElement, useEffect, useRef } from "react";

import setCanvasDefaults from "./setCanvasDefaults";

import "./Canvas.css";

const Canvas: React.FC = (): ReactElement<HTMLElement> => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (canvas === null) {
            return undefined;
        }
        setCanvasDefaults(canvas);
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx === null) {
            return undefined;
        }
    }, []);

    return (
        <div>
            <canvas width="500" height="1000" ref={canvasRef} className="canvas" />
        </div>
    );
};

export default Canvas;
