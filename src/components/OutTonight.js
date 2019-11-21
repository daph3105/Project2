import React, { Component } from 'react'
import GuruAnswerDesign from './GuruAnswerDesign'
import axios from 'axios';


let movieTitle;
let trailer;
let embededTrailer;
let drink;
let drinkImage;
let random = Math.floor(Math.random() * 2);

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
        return <iframe src={embededTrailer} style={{width:"420", height:"315", borderRadius: "30%"}}  
        allowFullScreen> </iframe> 
                }
        return <h3>Synopsis: {this.state.randomMovie.synopsis}</h3>
           }
             
    
    render() {
      console.log(random)
      if(random==0){
      if (this.state.randomMovie){
           movieTitle = this.state.randomMovie.title;
        return (
            <>
            <GuruAnswerDesign/>
            <div className="response-container">
            <p>Nope, not a good idea...</p>
            <p>you should stay home and watch:</p>
            <h3>{movieTitle}</h3>      
            {this.loadTrailerorNot()}         
            </div> 
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
        <GuruAnswerDesign/>
        <div className="response-container">
        <p>Yes, go out and have some fun</p>
        <p>buy yourself a drink:</p>
        <h3>{drink}</h3> 
        <p> is a good option</p>     
        <img src={drinkImage} style={{width:"200px"}}/>         
        </div> 
        </>
    )}
    else return(<div>Loading...</div>)
    }

  }
}

export default decideAnswer
