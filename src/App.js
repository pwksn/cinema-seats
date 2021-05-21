import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Starter from './Views/Starter';
import SeatsSelector from './Views/SeatsSelector';
import Overview from './Views/Overview';

function App() {
  return (
    <Router >
      <div className="App space-align-container">
        <Switch>
          <Route exact path="/">
            <Starter />
          </Route>
          <Route path="/seats">
            <SeatsSelector />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
