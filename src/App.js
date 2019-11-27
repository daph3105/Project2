import React, { Component } from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom';
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
import WhatToListen from './components/WhatToListen';



export class App extends Component {

questionAsked = (question) =>{
this.setState({question})
}
  render() {
   
    return (
     <>
          <div id="background-wrap">
              <div className="x1">
                  <div className="cloud"></div>
              </div>

              <div className="x2">
                  <div className="cloud"></div>
              </div>

              <div className="x3">
                  <div className="cloud"></div>
              </div>
          </div>   
<Switch>

<Route exact path="/" component={HomePage} />
<Route exact path="/yes-no" render={() => <YesNoQuestion questionAsked={this.questionAsked}/>} />
<Route exact path="/answer1" render={() => <YesNoAnswer question={this.state.question}/>} />
<Route exact path="/this-that" render={() => <ThisThatAnswer/>} />
<Route exact path="/decide" render={() => <DecideQuestion/>} />
<Route exact path="/answer3" render={() => <OutTonight/>} />
<Route exact path="/eat" render={() => <EatAnswer/>} />
<Route exact path="/advice" render={() => <Advice/>} />
<Route exact path="/answer7" render={() => <WhatToDo/> }/>
<Route exact path="/answer8" render={() => <WhatToWatch/> }/>
<Route exact path="/answer9" render={() => <WhatToListen/>}/>

</Switch>

      </>
    )
  }
}

export default App




