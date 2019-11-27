import React, {Component} from 'react'
import NavDesktop from './NavDesktop'
import ShareSection from './ShareSection'




let options;
let urlPart1 = "https://api.giphy.com/v1/gifs/search?api_key=sa9xw4Yo24USK2G5qleY0Y4HdBWjcDf2&q="
let urlPart2 = "&limit=1&offset=0&rating=G&lang=en"
let finalUrl
let gifToShow

const shareText = "I asked the Guru to decide for me between "
const shareTextOr = " or "
const shareText1 = " and he picked: "
const hash = "#asktheguru"
const shareUrl = "https://daph3105.github.io/Project2/#/this-that"

export class thisThatAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option1: '',
            option2: '',
            guruOption: '',
            randomGif: {},
            bubble: false
        }
    }

    setOptions = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {})
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.option1 && this.state.option2) {

            options = [this.state.option1, this.state.option2];
            let random = Math.floor(Math.random() * 2);
            this.setState({
                guruOption: options[random],
                bubble: true,
                loading: true

            })
            finalUrl = urlPart1.concat(options[random], urlPart2)
            console.log(finalUrl)

            fetch(finalUrl, {
                    cache: "no-store"
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data.data)
                    this.setState({
                            randomGif: data,
                            loading: false
                    })
                })
        }
    }



    render() {
        let optionToShow = '';

        if (this.state.guruOption) {
            optionToShow = <p id = "gif-text" style = {{textTransform: 'capitalize'}}> 
            {this.state.guruOption} is the best choice! </p>;
        } else {
            optionToShow = '';
        }

        if (this.state.randomGif.data) {

            gifToShow = <img id = "gif" src = {this.state.randomGif.data[0].images.original.url}/> ;
        } else {
            gifToShow = '';
        }

     

        return ( 
           <>
            <NavDesktop />

            <img id = "answer-image" src = "./images/guru2.png" / >

            <div className = "thisthat-answer">
            <h4 className = "guru-pick-text"> Guru, pick one for me: </h4> 
            <p id = "guru-pick-paragraph" > <i> Enter below two things, and the Guru will pick one
            for you: </i> </p>

            <form onSubmit = { this.mySubmitHandler } >
            <div className = "thisthat-input-container" >
            <input type = "text" name = "option1" placeholder = "This" value = {
                this.state.option1 }
            onChange = {this.setOptions} /> 
            <span > OR </span> 
            <input type = "text" name = "option2" placeholder = "That" value = { this.state.option2 }
            onChange = {
                this.setOptions
            }/> 
            </div> <button className = "btn btn-danger" type = "submit" > Pick Now </button> 
            </form>

            </div>
            <div className = "gif-container"> {optionToShow} {gifToShow} 
            {this.state.bubble ?
            <>
            <img className = "speech" src = "./images/speech1.png" />
              <ShareSection styleContainer = {"this-that-share-container"}
                fbUrl = {shareUrl}
                fbQuote = {shareText + this.state.option1 + shareTextOr + this.state.option2 + shareText1 + this.state.guruOption}
                hashtag = {hash}
                twUrl = {shareUrl}
                twTitle = {shareText + this.state.option1 + shareTextOr + this.state.option2 + shareText1 + this.state.guruOption}
                wpUrl = {shareUrl}
                wpTitle = {shareText + this.state.option1 + shareTextOr + this.state.option2 + shareText1 + this.state.guruOption}/>
                </> : null
            }

            </div>

            </>
        )
    }
}

export default thisThatAnswer