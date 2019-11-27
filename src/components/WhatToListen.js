import React, { Component } from 'react'
import axios from 'axios';
import NavDesktop from './NavDesktop'
import ShareSection from './ShareSection'
import {Link} from 'react-router-dom';

let randomWords = require('random-words');
let song;
let artist;
let linkToSong;

const shareText = "I asked the Guru to decide what I should listen to, and he suggested: "
const shareText2 = ", link to song: "
const hash =  "#asktheguru"
const shareUrl = "https://daph3105.github.io/Project2/#/decide"

console.log(randomWords());

let apiUrl1 = "https://ws.audioscrobbler.com/2.0/?limit=1&method=track.search&track="
let apiUrl2 = "&api_key=d97b234cde05ae9ba20b191bb6171e1c&format=json"

console.log((apiUrl1+randomWords()+apiUrl2))

export class WhatToListen extends Component {
constructor(props){
    super(props);
    this.state = {
    randomSong:{}
        }  
    }

componentDidMount() {
    axios.get(apiUrl1+randomWords()+apiUrl2)
    .then(response => {
        this.setState({ randomSong:response.data });
        console.log(this.state.randomSong)
    })
    .catch(error => {
        console.log(error);
    });
    }




    render() {
        if(this.state.randomSong.results){
            song = this.state.randomSong.results.trackmatches.track[0].name;
            artist = this.state.randomSong.results.trackmatches.track[0].artist;
            linkToSong = this.state.randomSong.results.trackmatches.track[0].url;
           }

        return (
            <>
            <NavDesktop/>

                <div className="response-container">
                <p id="advice">Listen to {song} by {artist}</p>
                <a href={linkToSong} id="song-link" target="_blank">Listen Here</a>
                <img className="speech-image" src="./images/speech1.png"/>
                </div>
                        
                        
                <img className="guru-img2" src="./images/guru2.png"/> 

                <ShareSection styleContainer={"share-container"}
                fbUrl={shareUrl} 
                fbQuote={shareText + song + shareText2 + linkToSong}
                hashtag={hash}
                twUrl={shareUrl}
                twTitle= {shareText + song + shareText2 + linkToSong}
                wpUrl={shareUrl}
                wpTitle= {shareText + song + shareText2 + linkToSong}

/>
<Link to to="/decide"><img className="back-button" src="./images/back-button.png" data-toggle="tooltip" title="go back" alt="go back"/></Link>
                
            </>
        )
    }
}

export default WhatToListen
