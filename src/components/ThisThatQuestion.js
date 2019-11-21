import React, { Component } from 'react'
import {Switch, Link, Route} from 'react-router-dom';


export class thisThatQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
        option1:'',
        option2:'',
        show:false
            }  
        }

        setOptions = (e) => {
            this.setState({
                [e.target.option1]:e.target.value,
                [e.target.option2]:e.target.value,       
            })
        }

        submitOptions = (e) => {
            e.preventDefault()
            let options = {
            option1: this.state.option1,
            option2: this.state.option2,
            } 
           console.log(this.option1)
           console.log(this.option2)
            } ;
   

    render() {
        return (
            <>
        {/* onSubmit = {this.submitOptions} */}
            <div className="thisthat-container">
            <img className="guru-img1"  src="./images/guru1.png"/>          
            <h4>Guru, pick one for me:</h4>
            <p><i>Enter below the two options you are in between:</i></p>
            <form >
            <div className="thisthat-input-container">
            <input type="text" name="option1" placeholder="Option 1" onChange={this.setOptions}/>
            <span>OR</span>
            <input type="text" name="option2" placeholder="Option 2" onChange={this.setOptions}/>
            </div>
            <button className="btn btn-primary" type="submit"><Link to= "/answer2" style={{textDecoration:"none", color:"white"}}>
            Pick Now </Link></button>
            </form>
            </div>
            </>
              
         
        )
    }
}

export default thisThatQuestion


