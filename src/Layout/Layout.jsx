import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import css from './Layout.module.css';

const Layout = () => {
  const headerStyle = {
    padding: '10px',
    textAlign: 'center',
    boxShadow: ' 4px 4px 8px 2px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
  };

  const navStyle = {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
  };

  const linkStyle = {
    textDecoration: 'none',
    margin: '0 10px',
    color: 'gray',
  };

  return (
    <>
      <header style={headerStyle}>
        <nav>
          <ul style={navStyle}>
            <li>
              <NavLink to="/" style={linkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="movies " style={linkStyle}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
