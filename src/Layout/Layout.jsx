import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
// import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <li>
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="movies " className={css.link}>
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
