import React, { Component } from 'react'
import NavDesktop from './NavDesktop'
import {Link} from 'react-router-dom';

const questions = [
    "Will I ever find true love?",
    "Should I quit my job?",
    "Will I be rich someday?",
    "Should I do what I'm seriously considering doing",
    "Should I send the text?"
]
let askButtonLink
export class YesNoQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        question: '',
    
    }
}
myChangeHandler = (event) => {
  this.setState({question: event.target.value});
  this.props.questionAsked(event.target.value)
}

buttonPressed = (event) => {
    this.setState({question: event.target.value});
    this.props.questionAsked(event.target.value)
    console.log(this.state.button)
}

    render() {
        if(this.state.question){
            askButtonLink = "/answer1";
        }
        else{
            askButtonLink = "/yes-no";
        }
        return (
            <>
             <NavDesktop/>
            <section className="question-section">
            <img className="guru-img-question" id="yes-noimg" src="./images/guru1.png"/>

            <h3 id="yes-no-title">Type your Yes/No question below,</h3>
            <p id="yes-noP">or click on one of the FAQs to ask the Guru.</p>
            <div>
            <input id="yes-no-question" type="text" name="yes-no-question" placeholder= "Guru..." value = {this.state.question} onChange = {this.myChangeHandler}/>
            <Link to={askButtonLink} style={{textDecoration:"none", color:"white"}}><button className= "btn btn-danger" id="btn-question" type = "submit"> Ask </button></Link>
            </div>
            </section> 
            <div className="baloon-container">
            <Link to="/answer1"> <input id="baloon1" type="image" src="./images/questionimg1.png" alt="find love" value = {questions[0]} onClick = {this.buttonPressed}/> </Link>
            <Link to="/answer1"> <input id="baloon2" type="image" src="./images/questionimg2.png" alt="quit job" value = {questions[1]} onClick = {this.buttonPressed}/> </Link>
            <Link to="/answer1"> <input id="baloon3" type="image" src="./images/questionimg3.png" alt="be rich" value = {questions[2]} onClick = {this.buttonPressed}/> </Link>
            <Link to="/answer1"> <input id="baloon4" type="image" src="./images/questionimg4.png" alt="stay or go" value = {questions[3]} onClick = {this.buttonPressed}/> </Link>
            <Link to="/answer1"> <input id="baloon5" type="image" src="./images/questionimg5.png" alt="send text" value = {questions[4]} onClick = {this.buttonPressed}/> </Link>
            </div>
           
           

             
            </>
        )
    }
}

export default YesNoQuestion