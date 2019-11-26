import React, { Component } from 'react'
import Dropdown from "./Dropdown"
import NavDesktop from './NavDesktop'
import {Link} from 'react-router-dom';


// const questions =[
//   {question:"Will I ever find true love?", link:"/answer1"},
//   {question:"Second question?", link:"/answer1" },
//   {question:"Third question?", link:"/answer1"},
//   {question: "Fourth question?", link:"/answer1"},
//   {question: "Fourth question?", link:"/answer1"},
//   {question: "Fourth question?", link:"/answer1"},
//   {question: "Fourth question?", link:"/answer1"},
//   {question: "Fourth question?", link:"/answer1"}]

export class YesNoQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        question: ''
     
    }
}
myChangeHandler = (event) => {
  this.setState({question: event.target.value});
}

    // constructor (props) {
    //     super(props);
    //     this.state = {
    //       show: false,
    //     };
    //   }
    
    //   handleToggle = (e) => {
    //     e.target.focus();
    //     this.setState({ show: !this.state.show });
    //   }
    
    // handleChange = (question) => () => {
    //     this.setState({ value: question, show: false });
    //   }



    render() {
        return (
            <>
             <NavDesktop/>
            <section className="question-section">
            <img className="guru-img-question" id="yes-noimg" src="./images/guru1.png"/>

            <h3 id="yes-no-title">Type your Yes/No question below,</h3>
            <p id="yes-noP">or click on one of the frequently asked questions to ask the Guru.</p>
            <div>
            <input id="yes-no-question" type="text" name="yes-no-question" placeholder= "Guru..." value = {this.state.question} onChange = {this.myChangeHandler}/>
            <Link to="/answer1" style={{textDecoration:"none", color:"white"}}><button className= "btn btn-danger" id="btn-question" type = "submit"> Ask </button></Link>
            </div>
            </section> 
            <div className="baloon-container">
            <Link to="/answer1"> <input id="baloon1" type="image" src="./images/questionimg1.png" alt="find love"/> </Link>
            <Link to="/answer1"> <input id="baloon2" type="image" src="./images/questionimg2.png" alt="quit job"/> </Link>
            <Link to="/answer1"> <input id="baloon3" type="image" src="./images/questionimg3.png" alt="be rich"/> </Link>
            <Link to="/answer1"> <input id="baloon4" type="image" src="./images/questionimg4.png" alt="stay or go"/> </Link>
            <Link to="/answer1"> <input id="baloon5" type="image" src="./images/questionimg5.png" alt="send text"/> </Link>
            </div>
           
           
            {/* <Dropdown show={this.state.show} value={this.state.value} handleToggle={this.handleToggle} 
            handleChange={this.handleChange} options={questions}/> */}
             
            </>
        )
    }
}

export default YesNoQuestion