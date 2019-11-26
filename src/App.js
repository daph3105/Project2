import React, { Component } from 'react'
import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
import HomePage from './components/HomePage.js'
import YesNoQuestion from './components/YesNoQuestion';
import YesNoAnswer from './components/YesNoAnswer';
import Advice from './components/Advice';
import ThisThatAnswer from './components/ThisThatAnswer';
import DecideQuestion from './components/DecideQuestion';
import OutTonight from './components/OutTonight';
import EatAnswer from './components/EatAnswer';
import WhatToDo from './components/WhatToDo';
import WhatToWatch from './components/WhatToWatch';


export class App extends Component {

  render() {
   
    return (
     <>
          <div id="background-wrap">
              <div class="x1">
                  <div class="cloud"></div>
              </div>

              <div class="x2">
                  <div class="cloud"></div>
              </div>

              <div class="x3">
                  <div class="cloud"></div>
              </div>

              {/* <div class="x4">
                  <div class="cloud"></div>
              </div>

              <div class="x5">
                  <div class="cloud"></div>
              </div> */}
          </div>   
<Switch>

<Route exact path="/" component={HomePage} />
<Route exact path="/yes-no" render={() => <YesNoQuestion/>} />
<Route exact path="/answer1" render={() => <YesNoAnswer/>} />
<Route exact path="/this-that" render={() => <ThisThatAnswer/>} />
<Route exact path="/decide" render={() => <DecideQuestion/>} />
<Route exact path="/answer3" render={() => <OutTonight/>} />
<Route exact path="/eat" render={() => <EatAnswer/>} />
<Route exact path="/advice" render={() => <Advice/>} />
<Route exact path="/answer7" render={() => <WhatToDo/> }/>
<Route exact path="/answer8" render={() => <WhatToWatch/> }/>

</Switch>

      </>
    )
  }
}

export default App




