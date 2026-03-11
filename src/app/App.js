import { Switch, Route } from 'react-router-dom';
import React from 'react';
// import Game from '../components/GameClass';
import Game from '../components/Game';
import ErrorPage from '../components/ErrorPage';

// Setting a route for Game and Error page..
function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Game } />
      <Route component={ ErrorPage } />
    </Switch>
  );
}
export default App;