import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Course from './components/Course';
import Home from './components/Home';
import './App.css';

import 'typeface-roboto';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/course/:id" component={Course} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
