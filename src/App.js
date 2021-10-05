import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import ProjectPage from './projects/ProjectPage';
import Layout from './Layout';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/projects/:id" component={ProjectPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
