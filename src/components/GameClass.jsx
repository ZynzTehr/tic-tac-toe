import React from 'react';
import '../styles/Game.css';
import Board from './Board';
import ResetButton from './ResetButton';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moveHistory: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      moveCount: 0,
      stepNumber: 0,
      scoreX: 0,
      scoreO: 0
    };
    // this.updateScores = this.updateScores.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  };


  // Loops through winSets to give us a winner..
  calculateWinner(squares) {
    let winSets = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8]
    ];

    // for (let i = 0; i < winSets.length; ++i) {
    //   const [x, y, z] = winSets[i];
    //   if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
    //     return squares[x];
    //   }
    // }
    // return null;

    const winningSet = winSets.filter(([x, y, z]) => {
      return squares[x] && squares[x] === squares[y] && squares[x] === squares[z];
    });
    return winningSet.length > 0 ? squares[winningSet[0][0]] : null;

  };
  // Component for when user clicks on the game Board to display either an 'x' or an 'o'..
  handleClick(i) {
    let squares = this.state.squares.slice();

    // Prevent user from changing a square that has been denominated already..
    if (this.calculateWinner(squares) || squares[i]) return;

    // Add 'X' or 'O' to a square depending on who's turn it is..
    if (this.state.xisNext) {
      squares[i] = 'X';
    } else {
      squares[i] = 'O';
    }

    this.setState({
      squares: squares,
      xisNext: !this.state.xisNext
    });
  };

  // Reset game for a new game..
  resetGame(event) {
    event.preventDefault();

    this.setState({
      squares: Array(9).fill(null),
      xisNext: true
    });
  };

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  // updateScores(winner) {
  //   if (winner === 'O') {
  //     this.setState({ scoreO: this.state.scoreO + 1 });
  //   } else {
  //     this.setState({ scoreX: this.state.scoreX + 1 });
  //   }
  // }


  render() {
    const moveHistory = this.state.moveHistory;
    const currentMove = history[this.state.stepNumber];
    let gameWinner = this.calculateWinner(this.state.squares);

    const moves = moveHistory.map((step, move) => {
      const description = move ? `Go to move # ${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button className="reset-button w-100 my-2 py-2" onClick={() => this.jumpTo(move)}>{description}</button>
        </li>
      );
    });

    let status;

    // Determine the winner of the game & update score board..
    if (gameWinner) {
      status = `Winner: ${gameWinner}`;
      // this.updateScores(gameWinner);
      gameWinner === 'O' ? this.state.scoreO++ : this.state.scoreX++;
    } else if (currentMove.squares.every(square => square)) {
      status = 'Tie Game';
    } else {
      if (this.state.xisNext) {
        status = 'Next Player is : X';
      } else {
        status = 'Next Player is : O';
      }
    };

    // Render everything to the browser..
    return (
      <div className='game'>
        <div className='game-board'>
          <h1 className='game-title'> Tic Tac Toe </h1>
          <Board squares={currentMove.squares} handleClick={i => this.handleClick(i)} />
          <div className='game-info'>
            <span className='game-status'> {status} </span>
            <section className="history">{moves}</section>
            <ul className='my-4'>Score Board :
              <p className='game-score my-2'>
                <span className='player'> Player X </span>
                <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-right"></i>
                <span className='score'> {this.state.scoreX} </span>
              </p>
              <p className='game-score'>
                <span className='player'> Player O </span>
                <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-right"></i>
                <span className='score'> {this.state.scoreO} </span>
              </p>
            </ul>
          </div>
          <ResetButton resetBoard={this.resetGame} />
        </div>
      </div>
    );
  };
};
export default Game; 