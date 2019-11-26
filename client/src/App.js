import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import './App.css';

import 'typeface-roboto';



function App() {
	return (
		<div className='App'>
			<Router>
        <Route exact path='/' component={Home} />
      </Router>
		</div>
	);
}

export default App;
