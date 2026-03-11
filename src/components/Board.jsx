import React from 'react';
import Square from './Square';
import '../styles/Board.css';

// const Board = props => {
//   // Set up for Passing props down the tree to be available for use..
//   const { squares, handleClick } = props;

//   // Set up for Passing props down the tree to be available for use..
//   const square = idx => <Square value={ squares[idx] } handleClick={ () => { handleClick(idx) } } />;

//   return (
//     <div>
//       <div className='board-row'>
//         {square(0)}
//         {square(1)}
//         {square(2)}
//       </div>
//       <div className='board-row'>
//         {square(3)}
//         {square(4)}
//         {square(5)}
//       </div>
//       <div className='board-row'>
//         {square(6)}
//         {square(7)}
//         {square(8)}
//       </div>
//     </div>
//   );
// }

const Board = props => {
  const { squares, handleClick } = props;

  const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map(squareIndex => (
            <Square
              key={squareIndex}
              value={squares[squareIndex]}
              handleClick={() => handleClick(squareIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;