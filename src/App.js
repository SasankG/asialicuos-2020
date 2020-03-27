import React from 'react';
import LandingPage from './Components/Main/LandingPage/LandingPage';
import Main from '../src/Components/Main/Main';
import {
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={Main} />
        </div>
      </Router>
    </div>
  );
}

export default App;
