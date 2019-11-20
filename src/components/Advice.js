import React, { Component } from 'react'
import axios from 'axios';
import GuruAnswerDesign from './GuruAnswerDesign.js'


let advice;

export class Advice extends Component {

    constructor(props){
        super(props);
        this.state = {
        randomAdvice:{}
            }  
        }

    componentDidMount() {
        axios.get(`https://api.adviceslip.com/advice`)
        .then(response => {
          this.setState({ randomAdvice:response.data });
        })
        .catch(error => {
          console.log(error);
        });
      }    
      
 
    
    
    render() {

   if(this.state.randomAdvice.slip){
    advice = this.state.randomAdvice.slip.advice;
   }
    
    
   
        return (
            <>
                <GuruAnswerDesign/>
                <div className="response-container">
                <p style={{marginTop:"100px", marginLeft:"0"}}>{advice}</p>
                </div>
            </>
        )
    }
}


export default Advice
