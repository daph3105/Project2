import React, { Component } from 'react'
import axios from 'axios';


export class YesorNo extends Component {

    constructor(props){
        super(props);
        this.state = {
        randomAnswer:{}
            }  
        }

    componentDidMount() {
        axios.get(`https://yesno.wtf/api/`)
        .then(response => {
          this.setState({ randomAnswer:response.data });
        })
        .catch(error => {
          console.log(error);
        });
      }
    render() {
        return (
            <>
       
            <div className="response-container">
            <h1 style={{ textTransform: 'capitalize'}}>{this.state.randomAnswer.answer}...</h1>
            <img src={this.state.randomAnswer.image} style={{maxWidth:"250px", borderRadius: "50%"}}/>
            <img className="speech-image" src="./images/speech-bubble.png"/>
            <img className="guru-img2" src="./images/guru2.png"/> 
            
            </div> 
            </>
        )
    }
}

export default YesorNo
