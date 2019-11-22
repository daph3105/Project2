import React, { Component } from 'react'
import axios from 'axios';
import NavBarMobile from './NavBarMobile'
import NavDesktop from './NavDesktop'


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
               <NavBarMobile/>
               <NavDesktop/>
                <div className="response-container">
                <p id="advice">{advice}</p>
                <img className="speech-image" src="./images/speech1.png"/>
                </div>
                <img className="guru-img2" src="./images/guru2.png"/> 
            </>
        )
    }
}


export default Advice
