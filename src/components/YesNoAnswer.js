import React, { Component } from 'react'
import axios from 'axios';
import NavDesktop from './NavDesktop'
import ShareSection from './ShareSection'


const shareText = "I asked the Guru:";

const hash = "#asktheguru"
const shareUrl = "https://daph3105.github.io/Project2/#/yes-no"


export class YesorNo extends Component {
  
    constructor(props){
        super(props);
        this.state = {
        randomAnswer:{}
            }  
        }

    componentDidMount() {
        axios.get(`https://yesno.wtf/api/`)
        .then(response => {
          this.setState({ randomAnswer:response.data });
        })
        .catch(error => {
          console.log(error);
        });
      }
    render() {
        return (
            <>
            <NavDesktop activeLink1={"nav-item nav-link active"}/>


            <div className="response-container">    
            <h1 id="yes-no-text" style={{ textTransform: 'capitalize'}}>{this.state.randomAnswer.answer}...</h1>
            <img id="yes-no-image" src={this.state.randomAnswer.image} />
            <img className="speech-image" src="./images/speech1.png"/>
            </div> 

            <img className="guru-img2" src="./images/guru2.png"/> 

            <ShareSection styleContainer={"share-container"} 
            fbUrl={shareUrl} 
            fbQuote={shareText + this.state.randomAnswer.answer}
            hashtag={hash}
            twUrl={shareUrl}
            twTitle={shareText + this.state.randomAnswer.answer}
            wpUrl={shareUrl}
            wpTitle={shareText + this.state.randomAnswer.answer}

            />
        
            </>
        )
    }
}

export default YesorNo
