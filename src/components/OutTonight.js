import React, { Component } from 'react'
import NavDesktop from './NavDesktop'
import ShareSection from './ShareSection'
import {Link} from 'react-router-dom';

import axios from 'axios';

const shareText = "I asked the Guru to decide if I should go out tonight, and he told me to"
const stayText =" stay home and watch: "
const outText = " go out and drink a "
const hash =  "#asktheguru"
const shareUrl = "https://daph3105.github.io/Project2/#/decide"

let movieTitle;
let trailer;
let embededTrailer;
let finalTrailerLink;
let drink;
let drinkImage;
let randomNumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

export class decideAnswer extends Component {

    constructor(props){
        super(props);
        this.state = {
        randomMovie:{},
        randomDrink:{}
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
          axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
          .then(response => {
            this.setState({ randomDrink:response.data });

          })
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
      console.log(randomNumber)
      if(randomNumber==1){
      if (this.state.randomMovie){
           movieTitle = this.state.randomMovie.title;
        return (
            <>
           <NavDesktop activeLink={"nav-item nav-link active"}/>
            <div className="response-container">
            <p id="stay-home-text" >Nope...<br/>
              {stayText}</p>
            <h3 id="movie-title">{movieTitle}</h3>      
            <img className="speech-image" src="./images/speech1.png"/>
            {this.loadTrailerorNot()}
            </div> 
            <img className="guru-img2" src="./images/guru2.png"/> 

            <ShareSection styleContainer={"share-container"}
            fbUrl={shareUrl} 
            fbQuote={shareText + stayText + movieTitle}
            hashtag={hash}
            twUrl={shareUrl}
            twTitle={shareText + stayText + movieTitle}
            wpUrl={shareUrl}
            wpTitle={shareText + stayText + movieTitle}
            />
            <Link to to="/decide"><img className="back-button" src="./images/back-button.png" data-toggle="tooltip" title="go back" alt="go back"/></Link>
            </>
        )}
        else return(<div>Loading...</div>)
    }
  else{
    
    if(this.state.randomDrink.drinks){
      drink = this.state.randomDrink.drinks[0].strDrink
      drinkImage = this.state.randomDrink.drinks[0].strDrinkThumb
      return (
        <>
        <NavDesktop activeLink={"nav-item nav-link active"}/>
        <div className="response-container">
        <p id="go-out-text" >Yes, go out and have some fun!<br/>
        buy yourself a drink, I feel like you need a...</p>
        <h3 id="drink-text">{drink}</h3>    
        <img className="speech-image" src="./images/speech1.png"/>
        <img id="drink-image" src={drinkImage}/>         
        </div> 
        <img className="guru-img2" src="./images/guru2.png"/> 

        <ShareSection styleContainer={"share-container"}
            fbUrl={shareUrl} 
            fbQuote={shareText + outText + drink}
            hashtag={hash}
            twUrl={shareUrl}
            twTitle={shareText + outText + drink}
            wpUrl={shareUrl}
            wpTitle={shareText + outText + drink}
            />
      <Link to to="/decide"><img className="back-button" src="./images/back-button.png" data-toggle="tooltip" title="go back" alt="go back"/></Link>
        </>
    )}
    else return(<div>Loading...</div>)
    }

  }
}

export default decideAnswer

