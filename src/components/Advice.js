import React, { Component } from 'react'
import axios from 'axios';



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
               
                <div className="response-container">
                <p style={{marginTop:"100px", marginLeft:"0"}}>{advice}</p>
                <img className="guru-img2" src="./images/guru2.png"/> 
                </div>
            </>
        )
    }
}


export default Advice
