import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Game } from './pages/game';
import { Header } from './components/header';
import { AlertBox } from './components/alertBox';
import { Finale } from './pages/finale';
import { About } from './pages/about';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>
        <Route exact path="/finale">
          <Finale />
        </Route>
      </Switch>
      <AlertBox />
    </Router>
  );
}

export default App;
