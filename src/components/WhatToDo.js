import React, { Component } from 'react'
import axios from 'axios';
import NavDesktop from './NavDesktop'
import ShareSection from './ShareSection'

const shareText = "I asked the Guru to decide what I should do now, and he replied with: "
const hash =  "#asktheguru"
const shareUrl = "https://daph3105.github.io/Project2/#/decide"

let activity;
export class WhatToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
        randomActivity:{}
            }  
        }

        componentDidMount() {
            axios.get(`https://www.boredapi.com/api/activity/`)
            .then(response => {
              this.setState({ randomActivity:response.data });
              console.log(this.state.randomActivity)
            })
            .catch(error => {
              console.log(error);
            });
          }
    
    render() {
        if(this.state.randomActivity){
            activity = this.state.randomActivity.activity;
           }
        return (
            <>
            <NavDesktop/>

                <div className="response-container">
                <p id="advice">{activity}</p>
                <img className="speech-image" src="./images/speech1.png"/>
                </div>
                        
                        
                <img className="guru-img2" src="./images/guru2.png"/> 

                <ShareSection styleContainer={"share-container"}
                fbUrl={shareUrl} 
                fbQuote={shareText + activity}
                hashtag={hash}
                twUrl={shareUrl}
                twTitle= {shareText + activity}
                wpUrl={shareUrl}
                wpTitle= {shareText + activity}

                />
            </>
        )
    }
}

export default WhatToDo
