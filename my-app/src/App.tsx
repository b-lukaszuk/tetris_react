import React, { ReactElement } from 'react';

import Canvas from "./components/canvas/Canvas";

import './App.css';

const App: React.FC = (): ReactElement<HTMLElement> => {
    return (
        <div className="App">
            <p>Tetris</p>
            <Canvas />
        </div>
    );
}

export default App;
