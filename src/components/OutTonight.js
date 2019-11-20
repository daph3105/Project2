import React, { Component } from 'react'
import axios from 'axios';
import GuruAnswerDesign from './GuruAnswerDesign'


let movieTitle;
let trailer;
let embededTrailer;

export class decideAnswer extends Component {

    constructor(props){
        super(props);
        this.state = {
        randomAnswer:{}
            }  
        }

 
    componentDidMount() {
   
        fetch('https://tv-v2.api-fetch.website/random/movie', {cache: "no-store"})
        .then(response=>response.json())
        .then(data=> this.setState({randomMovie:data}))
        
       
        // axios.get('https://tv-v2.api-fetch.website/random/movie', {cache: "no-store"})
        // .then(response => {
        //   console.log(response, '-=-=-=-=')
        //   this.setState({ randomMovie:response.data });
        // })
        // .catch(error => {
        //   console.log(error);
        // });
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
}



export default decideAnswer
