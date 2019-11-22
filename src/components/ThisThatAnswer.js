import React, { Component } from 'react'
import NavBarMobile from './NavBarMobile'
import NavDesktop from './NavDesktop'




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
        bubble:false
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
            
            fetch(finalUrl, {cache: "no-store"})
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
          optionToShow = <p id="gif-text" style={{textTransform: 'capitalize'}}> {this.state.guruOption} is the best option! </p>;
        } else {
          optionToShow = '';
        }
        
        if (this.state.randomGif.data){
           
            gifToShow = <img id="gif" src={this.state.randomGif.data[0].images.original.url}/> ;
            }
            else{
                gifToShow='';
            }

        return (
            <>
            <NavBarMobile/>
            <NavDesktop/>
            
            <img id="answer-image" src="./images/guru2.png"/>
            <div className="thisthat-answer">
            <h4 className="guru-pick-text">Guru, pick one for me:</h4>
            <p><i>Enter below two options, and the Guru will pick one for you:</i></p>
            <form onSubmit={this.mySubmitHandler}>
            <div className="thisthat-input-container">
            <input type="text" name="option1" placeholder="Option 1" value={this.state.option1} onChange={this.setOptions}/>
            <span>OR</span>
            <input type="text" name="option2" placeholder="Option 2" value={this.state.option2} onChange={this.setOptions}/>
            </div>
            <button className="btn btn-primary" type="submit" onClick={()=>{this.setState({bubble:true})}} > Pick Now </button>
            </form>
            <div className="gif-container">    
            {optionToShow}
            {gifToShow}
            {this.state.bubble ? <img className="speech" src="./images/speech1.png"/>: null}
            
            </div>
            </div>
            </>
        )
    }
}

export default thisThatAnswer



  
 
  
