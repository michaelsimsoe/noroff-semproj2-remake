import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = (props) => {
  const sideBarClass = props.open
    ? 'main-navigation main-navigation--open'
    : 'main-navigation';
  return (
    <aside className={sideBarClass} id="main-navigation">
      <nav className="navigation">
        <div className="navigation__item">
          <NavLink to="/">Start Again</NavLink>
        </div>
        <div className="navigation__item">
          <NavLink to="/about">About the Game</NavLink>
        </div>
        <div className="navigation__item">
          <a href="https://michaelsimsoe.no">Michaelsimsoe.no</a>
        </div>
      </nav>
    </aside>
  );
};
