import React from 'react';
import '../styles/ResetButton.css';

const ResetButton = props => {
  return (
      <button className='reset-button w-100 p-2' onClick={props.resetBoard}> Reset </button>
    );
}
export default ResetButton;