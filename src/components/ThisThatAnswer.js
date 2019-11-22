import React, { Component } from 'react'
import axios from 'axios';



let options;
let urlPart1 = "https://api.giphy.com/v1/gifs/search?api_key=sa9xw4Yo24USK2G5qleY0Y4HdBWjcDf2&q="
let urlPart2= "&limit=1&offset=0&rating=G&lang=en"
let finalUrl
let gifToShow

export class thisThatAnswer extends Component {
    constructor(props){
        super(props);
        this.state = {
        option1:'',
        option2:'',
        guruOption:'',
        randomGif:{},
            }  
        }

        setOptions = (e) => {
            this.setState({
                [e.target.name]: e.target.value
                }, ()=>{
                })
        }

        mySubmitHandler = (event) => {
            event.preventDefault();
            options = [this.state.option1, this.state.option2];
            let random = Math.floor(Math.random() * 2);
            this.setState({guruOption:options[random]})
            finalUrl = urlPart1.concat(options[random],urlPart2)
            console.log(finalUrl)
            
            fetch(finalUrl)
            .then(response=>response.json())
            .then(data=> {
                console.log(data.data)
                this.setState({
                    randomGif: data
                },
                console.log(this.state.randomGif)
                )})    
          }

          

    render() {
        let optionToShow = '';
        if (this.state.guruOption) {
          optionToShow = <p style={{textTransform: 'capitalize'}}> {this.state.guruOption} is the best option </p>;
        } else {
          optionToShow = '';
        }
        
        if (this.state.randomGif.data){
           
            gifToShow = this.state.randomGif.data[0].images.original.url;
            }

        return (
            <div className="thisthat-answer">
            <img id="answer-image" src="./images/guru2.png"/>
            
            <h4 className="answer-input-container">Guru, pick one for me:</h4>
            <p><i>Enter below two options, and the Guru will pick one for you:</i></p>
            <form onSubmit={this.mySubmitHandler}>
            <div className="thisthat-input-container">
            <input type="text" name="option1" placeholder="Option 1" value={this.state.option1} onChange={this.setOptions}/>
            <span>OR</span>
            <input type="text" name="option2" placeholder="Option 2" value={this.state.option2} onChange={this.setOptions}/>
            </div>
            <button className="btn btn-primary" type="submit"> Pick Now </button>
            </form>
            {optionToShow}
            <img style={{width:"200px"}} src={gifToShow}/>
            <img className="guru-img2" src="./images/guru2.png"/> 
             <img id="bubble-answer" src="./images/baloon.png"/>
            </div>
        )
    }
}

export default thisThatAnswer
