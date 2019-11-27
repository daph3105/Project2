import React, { Component } from 'react'
import NavDesktop from './NavDesktop'
import ShareSection from './ShareSection'
import {Link} from 'react-router-dom';

const shareText = "I asked the Guru to decide what I should watch, and he recommended: "
const hash =  "#asktheguru"
const shareUrl = "https://daph3105.github.io/Project2/#/decide"


let movieTitle;
let trailer;
let embededTrailer;
let finalTrailerLink;
let showTitle;
let showPoster;
let randomNumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

export class WhatToWatch extends Component {
    constructor(props){
        super(props);
        this.state = {
        randomMovie:{},
        randomShow:{}
            }  
        }


  componentDidMount() {
          fetch('https://tv-v2.api-fetch.website/random/movie', {cache: "no-store"})
          .then(response=>response.json())
          .then(data=> this.setState({randomMovie:data})

          )
          .catch(err =>{
            console.log(err)
          })
          fetch('https://tv-v2.api-fetch.website/random/show', {cache: "no-store"})
            .then(response =>response.json())
            .then(data=> this.setState({randomShow:data})

          )
          .catch(err =>{
            console.log(err)
          })
            
      }     
     


    loadTrailerorNot = () =>{
      if(this.state.randomMovie.trailer!=null){
       trailer = this.state.randomMovie.trailer;          
       embededTrailer = trailer.replace("watch?v=", "embed/");
       finalTrailerLink = embededTrailer.replace("http:", "https:")
        return (<>
               <iframe src={finalTrailerLink} allowFullScreen> </iframe> 
               <a href={finalTrailerLink} id="trailer-link" target="_blank">Link to Trailer</a></>)
                }
        return <h3 id="synopsis" >Synopsis: {this.state.randomMovie.synopsis}</h3>
           }    
    
    render() {
        if(randomNumber==1){
        if (this.state.randomMovie){
             movieTitle = this.state.randomMovie.title;
        return (
            <>
            <NavDesktop activeLink={"nav-item nav-link active"}/>
             <div className="response-container">
             <p id="stay-home-text" >You should watch the movie:</p>
             <h3 id="movie-title">{movieTitle}</h3>      
             <img className="speech-image" src="./images/speech1.png"/>
             {this.loadTrailerorNot()}
             </div> 
             <img className="guru-img2" src="./images/guru2.png"/> 
 
             <ShareSection styleContainer={"share-container"}
             fbUrl={shareUrl} 
             fbQuote={shareText + movieTitle}
             hashtag={hash}
             twUrl={shareUrl}
             twTitle={shareText + movieTitle}
             wpUrl={shareUrl}
             wpTitle={shareText + movieTitle}
             />
             <Link to to="/decide"><img className="back-button" src="./images/back-button.png" data-toggle="tooltip" title="go back" alt="go back"/></Link>
             </>
         )}
         else return(<div>Loading...</div>)
     }
   else{
    if(this.state.randomShow.images){
        showPoster= this.state.randomShow.images.poster

    }
     
     if(this.state.randomShow){
       showTitle = this.state.randomShow.title
      
    
       return (
         <>
         <NavDesktop activeLink={"nav-item nav-link active"}/>
         <div className="response-container">
         <p id="watch-text" >You should watch the show:</p>
         <h3 id="show-text">{showTitle}</h3>    
         <img className="speech-image" src="./images/speech1.png"/>
         <img id="poster-image" src={showPoster}/> 
         </div> 
         <img className="guru-img2" src="./images/guru2.png"/> 
 
         <ShareSection styleContainer={"share-container"}
             fbUrl={shareUrl} 
             fbQuote={shareText + showTitle}
             hashtag={hash}
             twUrl={shareUrl}
             twTitle={shareText + showTitle}
             wpUrl={shareUrl}
             wpTitle={shareText + showTitle}
             />
        <Link to to="/decide"><img className="back-button" src="./images/back-button.png" data-toggle="tooltip" title="go back" alt="go back"/></Link>
         </>
     )}
     else return(<div>Loading...</div>)
     }
    }
                 
}

export default WhatToWatch
