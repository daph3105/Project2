import React, { Component } from 'react'
import axios from 'axios';
import NavDesktop from './NavDesktop'
import ShareSection from './ShareSection'


let mealToEat;
let recipe;
let mealPhoto;

const shareText = "I asked the Guru to decide what I should eat, and he said: ";
let shareText1;
const hash = "#asktheguru"
const shareUrl = "https://daph3105.github.io/Project2/#/decide"

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
            <NavDesktop activeLink={"nav-item nav-link active"}/>
            <div className="response-container">
            <h4 id="food-title" >Have some {mealToEat}</h4>
            <img id="food-image"  src={mealPhoto}/>
            {recipe ? 
                <>
                <p id="share-eat">{shareText1=", link to recipe: "+ recipe}</p>
                <p id="food-text1" >I even found the recipe for you <a href={recipe} target="_blank"> here.</a> </p>
                <p id="food-text2" >Now, don't be lazy and go cook.</p>             
                </> 
            :
            <> 
            <p id="share-eat">{shareText1=", Yummy! "}</p>
            <h3 id="food-text2" >Bon Appetit!</h3>
            </>
            }

            <img className="speech-image" src="./images/speech1.png"/>
            </div>
            <img className="guru-img2" src="./images/guru2.png"/> 

            <ShareSection styleContainer={"share-container"} 
            fbUrl={shareUrl} 
            fbQuote={shareText + mealToEat + shareText1}
            hashtag={hash}
            twUrl={shareUrl}
            twTitle={shareText + mealToEat + shareText1}
            wpUrl={shareUrl}
            wpTitle={shareText + mealToEat + shareText1}

            />
               
            </>
        )}

    
}

export default EatAnswer
