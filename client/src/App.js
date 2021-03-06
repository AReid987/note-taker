import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotesPage from './containers/NotesPage';

import LandingPage from './components/LandingPage';
import NavBarPage from './components/NavBarPage';

import './App.css';

const App = () => {
    return (
      <Router>
        <div className="container-fluid">
          <NavBarPage />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/notes" component={NotesPage} />
          </Switch>
        </div>
      </Router>
    );

}

export default App;
