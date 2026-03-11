import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/index.css';
import '../styles/ResetButton.css';

class ErrorPage extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <h1 style={{ fontSize: '4rem' }}>There is Nothing Here!</h1>
        <h2><b>Go Back!</b></h2>
        <p>We couldn't find that page!</p>

        <img
          style={{ width: '300px', borderRadius: '8px' }}
          src={`${process.env.PUBLIC_URL}/images/puppy.jpeg`}
          alt='winking puppy face'
        />

        <h2 style={{ marginTop: '32px' }}><b>Page Not Found</b></h2>

        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <button className='reset-button'>Go Home</button>
        </Link>
      </div>
    );
  }
}

export default ErrorPage;