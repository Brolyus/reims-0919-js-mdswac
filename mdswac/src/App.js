import React from 'react'
import Output from './components/Output'
import Middle from './components/Middle'
import Input from './components/Input'
import './App.css'
import CounterBar from './components/CounterBar'
import Navbar from './components/Navbar'
import Keyword from './components/Keyword'
import test from './components/test'
import Cahier from './components/Cahier'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App () {
  
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={test} />
          <Route path="/Home" exact component={Cahier} />
        </Router>
      </div>
    );
}


export default App;

