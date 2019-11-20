import React, { Component } from 'react'
import axios from 'axios';
import GuruAnswerDesign from './GuruAnswerDesign'

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
             <GuruAnswerDesign/>
            <div className="response-container">
            <h4>Have some {mealToEat}</h4>
            <img style={{width:"100px", borderRadius: "50%"}} src={mealPhoto}/>
            <p>I even found the recipe for you <a href={recipe} target="_blank"> here.</a> </p>
            <p>Now, don't be lazy and go cook.</p>
            
            </div>
               
            </>
        )}

    
}

export default EatAnswer
