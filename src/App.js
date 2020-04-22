import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Game } from './pages/game';
import { Header } from './components/header';
import { AlertBox } from './components/alertBox';
import { Finale } from './pages/finale';
import { About } from './pages/about';
import { Sidebar } from './components/sidebar';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const openMenu = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <Router>
      <Header openMenu={openMenu} />
      <Sidebar open={openSidebar} />
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
