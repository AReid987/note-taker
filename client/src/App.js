import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotesPage from './containers/NotesPage';

import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/notes" component={NotesPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
