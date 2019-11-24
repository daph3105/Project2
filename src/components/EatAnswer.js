import React, { Component } from 'react'
import axios from 'axios';
import NavDesktop from './NavDesktop'


let mealToEat;
let recipe;
let mealPhoto;

export class EatAnswer extends Component {
    constructor(props){
        super(props);
        this.state = {
        randomMeal:{}
            }  
        }

    componentDidMount() {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => {
          this.setState({ randomMeal:response.data });
          console.log(this.state.randomMeal)
        })
        .catch(error => {
          console.log(error);
        });
      }
    render() {
        if (this.state.randomMeal.meals){
        mealToEat = this.state.randomMeal.meals[0].strMeal;
        recipe = this.state.randomMeal.meals[0].strSource;
        mealPhoto = this.state.randomMeal.meals[0].strMealThumb;
        }
        return (
            <>
            <NavDesktop/>
            <div className="response-container">
            <h4 id="food-title" >Have some {mealToEat}</h4>
            <img id="food-image"  src={mealPhoto}/>
            <p id="food-text1" >I even found the recipe for you <a href={recipe} target="_blank"> here.</a> </p>
            <p id="food-text2" >Now, don't be lazy and go cook.</p>
            <img className="speech-image" src="./images/speech1.png"/>
            </div>
            <img className="guru-img2" src="./images/guru2.png"/> 
               
            </>
        )}

    
}

export default EatAnswer
