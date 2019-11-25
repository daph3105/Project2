import React, { Component } from 'react'
import axios from 'axios';
import NavDesktop from './NavDesktop'
import ShareSection from './ShareSection'

const shareText = "Advice from the Guru: "
const hash =  "#asktheguru"
const shareUrl = "https://daph3105.github.io/Project2/#/advice"
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
        <NavDesktop/>

        <div className="response-container">
        <p id="advice">{advice}</p>
        <img className="speech-image" src="./images/speech1.png"/>
        </div>
                
                
        <img className="guru-img2" src="./images/guru2.png"/> 


        <ShareSection styleContainer={"share-container"}
        fbUrl={shareUrl} 
        fbQuote={shareText + advice}
        hashtag={hash}
        twUrl={shareUrl}
        twTitle= {shareText + advice}
        wpUrl={shareUrl}
        wpTitle= {shareText + advice}

        />

            </>
        )
    }
}


export default Advice
