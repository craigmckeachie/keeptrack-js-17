import React from 'react';
import { NavLink } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <div className="container">
        <header className="sticky">
          <span className="logo">
            <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
          </span>
          <NavLink to="/" exact className="button rounded">
            <span className="icon-home"></span>
            Home
          </NavLink>
          <NavLink to="/projects/" className="button rounded">
            Projects
          </NavLink>
        </header>
        <main>{children}</main>
        <footer>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, sunt
            totam nulla similique ea assumenda, dignissimos aspernatur rem
            tempore consequatur vero quam omnis ducimus illum excepturi quas
            voluptatem numquam eum!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
