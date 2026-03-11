import React, { useState } from 'react';
import '../styles/Game.css';
import Board from './Board';
import ResetButton from './ResetButton';

const Game = () => {

    const [historyState, setHistoryState] = useState([{ squares: Array(9).fill(null) }]);
    const [isXNextState, setXNextState] = useState(true);
    const [moveCountState, setMoveCountState] = useState(0);
    const [stepNumberState, setStepNumberState] = useState(0);
    
    let playerX = 0;
    let playerO = 0;



    // This function returns "X", "O" or null if there is no winner
    const calculateWinner = squares => {
        const winSets = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        //     for (let i = 0; i < winSets.length; ++i) {
        //       const [x, y, z] = winSets[i];
        //       if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        //         return squares[x];
        //       }
        //     }
        //     return null;

        const winningSet = winSets.filter(([x, y, z]) => {
            return squares[x] && squares[x] === squares[y] && squares[x] === squares[z];
        });
        return winningSet.length > 0 ? squares[winningSet[0][0]] : null;
    };


    // When square is clicked we add an "X" or an "O" to that square depending on which player's turn it is
    const handleClick = i => {
        const history = historyState.slice(0, stepNumberState + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        // This if statement prevents any action if there is already a winner
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = isXNextState ? 'X' : 'O';

        setHistoryState(history.concat([{ squares: squares }]));
        setXNextState(!isXNextState);
        setMoveCountState(moveCountState + 1);
        setStepNumberState(history.length);
    }

    // When reset game is called we clear all the squares
    const resetGame = event => {
        event.preventDefault();
        setHistoryState([{ squares: Array(9).fill(null) }]);
        setXNextState(true);
        setMoveCountState(0);
        setStepNumberState(0);
    }

    const jumpTo = step => {
        setStepNumberState(step);
        setXNextState((step % 2) === 0);
    }


    const history = historyState;
    const current = history[stepNumberState];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const description = move ? `Go to move # ${move}` : `Go to game start`;
        return (
            <div key={move}>
                <button className="reset-button w-100 my-2 py-2" onClick={() => jumpTo(move)}>{description}</button>
            </div>
        );
    });

    let status;
    if (winner) {
        status = `Winner: ${winner}`;
        if (winner === 'X') {
            playerX++
         } else {
            playerO++
         }
    } else if (current.squares.every(square => square)) {
        status = 'Tie game';
    } else {
        status = 'Next player: ' + (isXNextState ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div className="game-board">
                <h1 className="game-title">Tic Tac Toe</h1>
                <Board
                    squares={current.squares}
                    handleClick={(i) => handleClick(i)}
                />
                <div className="game-info">
                    <span className="game-status">{status}</span>
                    <section className="history">{moves}</section>
                </div>
                <ul className='my-4'>Score Board :
                    <p className='game-score my-2'>
                        <span className='player'> Player X </span>
                        <i class="fa fa-fw" aria-hidden="true" title="Copy to use arrow-right"></i>
                        <span className='score'> {playerX} </span>
                    </p>
                    <p className='game-score'>
                        <span className='player'> Player O </span>
                        <i class="fa fa-fw" aria-hidden="true" title="Copy to use arrow-right"></i>
                        <span className='score'> {playerO} </span>
                    </p>
                </ul>
                <ResetButton resetBoard={resetGame} />
            </div>
        </div>
    );
}

export default Game;
