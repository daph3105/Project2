import React, { Component } from 'react'
import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
import HomePage from './components/HomePage.js'
import YesNoQuestion from './components/YesNoQuestion';
import YesNoAnswer from './components/YesNoAnswer';
import Advice from './components/Advice';
import ThisThatQuestion from './components/ThisThatQuestion';
import ThisThatAnswer from './components/ThisThatAnswer';
import DecideQuestion from './components/DecideQuestion';
import DecideAnswer from './components/DecideAnswer';


export class App extends Component {

  render() {
   
    return (
     <>
     
<Switch>
<Route exact path="/" component={HomePage} />
<Route exact path="/yes-no" render={() => <YesNoQuestion/>} />
<Route exact path="/answer1" render={() => <YesNoAnswer/>} />
<Route exact path="/this-that" render={() => <ThisThatQuestion/>} />
<Route exact path="/answer2" render={() => <ThisThatAnswer/>} />
<Route exact path="/decide" render={() => <DecideQuestion/>} />
<Route exact path="/answer3" render={() => <DecideAnswer/>} />
<Route exact path="/advice" render={() => <Advice/>} />


</Switch>

      </>
    )
  }
}

export default App




