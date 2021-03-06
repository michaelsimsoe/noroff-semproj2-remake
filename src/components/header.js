import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Header = (props) => {
  const [openMenuBtn, setOpenMenuBtn] = useState(false);
  const openMenu = () => {
    setOpenMenuBtn(!openMenuBtn);
    props.openMenu();
  };
  const menuBtnClassName = openMenuBtn
    ? 'main-header__hamburger open'
    : 'main-header__hamburger';
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <svg
            className="logo__image"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 445 521"
          >
            <defs></defs>
            <title>Logo</title>
            <g id="" data-name="">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  style={{
                    fill: '#807984',
                  }}
                  className="logo-path"
                  d="M178.67,34,176,10l30,79c-4.61-37.76-7.64-71.6-4-89,5.45,14.3,12.15,46.08,19,80,3.68-8.92,1.11-67.59,8-80,4.82,8.75,7.3,45.74,10,80,1.33-.38,5,9.09,6,8s-.32-13.07.51-15.11c2.6-6.42,3.62-16.77,3.47-30,1.67-19.16,5.33-32.84,11-40.93-.8,36.29-2.28,77.15,1,86,8.19-35.62,16.37-70.64,24-83l-7,89c9.3-36.1,18.71-70.09,29-85L293,91c10.67-28.28,21.61-51.82,33-67L312,97c10-25.29,20-47.6,30-62,1.65,17.53-7.74,44.4-18,72,13.9-20.5,27.57-40,38-46-4,15.26-10.52,31-18,47,9.72-12.72,19.21-23.65,28-29l-13,36,21-21-13,30,17-12-4,12,8,4v19l8-1v16l7,2-9,19,6,1-4,24,8.76,5.7L402,231l-2.23,26.71L368,329l12,1,5,7-6,9,7,10-5,23,21,4,2.93,6.92L401,397l8.69,4.17L413,409l-12,8,36,48-7,14,15,41L0,521l46-41-6-7,5-6,17-16-7-14,20-3-9.2-22.79L81,393l-8,1,19-35-5.21-4.91L92,339l-14,8,10-51-15-5,8-10-9-20-13-6,6-12-7-22c7.58,2.07,14.6,3.28,18-1-4.22-13.18-7.53-25.47-7-34l15-1L69,159l9-7-1-13,11-5-1-11,10,2-5-16,14,10L98,91l25,25L106,75l31,38c-8.52-19.07-15.45-38.33-19-58l30,48c-6.34-28.9-12.33-57.22-10-72l31,74c-7.25-32.84-14.35-65.42-12-81l28,67-6.33-57"
                />
              </g>
            </g>
          </svg>
          <h1 className="logo__text">
            The Board Game
            <br />
            of Thrones
          </h1>
        </Link>
      </div>
      <svg
        className="main-header__background"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 338.905"
      >
        <g id="g1" data-name="g 1" transform="translate(-453 1090)">
          <g id="header" transform="translate(453 -1090)">
            <path
              id="Header_bg"
              data-name="Header bg"
              d="M386.074,663.819h0V324.914h1920v25.842c-63.2-5.43-134.08-8.183-210.675-8.183-55.76,0-114.985,1.469-176.031,4.365-61.767,2.93-126.312,7.367-191.84,13.185-135.7,12.049-276.416,30.005-418.233,53.37-93.983,15.484-186.946,33.123-276.307,52.426-86.918,18.776-171.124,39.274-250.279,60.925-77.726,21.26-151,43.745-217.792,66.831C498.6,616.6,438.423,640.2,386.074,663.819Z"
              transform="translate(-386.074 -324.913)"
              fill="#ddd"
            />
          </g>
        </g>
      </svg>
      <div
        onClick={openMenu}
        className={menuBtnClassName}
        id="menu"
        role="button"
        tabIndex="0"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h4>Menu</h4>
      </div>
    </header>
  );
};
