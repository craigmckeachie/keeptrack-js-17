import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import ProjectPage from './projects/ProjectPage';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import HomePage from './home/HomePage';
import SignInPage from './account/SignInPage';
import AccountHeader from './account/AccountHeader';

function App() {
  return (
    <Router>
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
        <AccountHeader />
      </header>
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/projects/:id" component={ProjectPage} />
          <Route path="/signin" exact component={SignInPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
