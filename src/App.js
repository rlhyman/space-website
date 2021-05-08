import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Constellations from './components/pages/Constellations';
import Astrology from './components/pages/Astrology';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home}/>
        <Route path='/News' exact component= {News}/>
        <Route path='/Constellations' exact component= {Constellations}/>
        <Route path='/Astrology' exact component= {Astrology}/>
        <Route path='/sign-up' exact component= {SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
