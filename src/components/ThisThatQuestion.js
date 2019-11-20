import React, { Component } from 'react'

export class thisThatQuestion extends Component {
    render() {
        return (
            <>
        
            <div className="thisthat-container">
            <img className="guru-img1"  src="./images/guru1.png"/>
            <h4>Guru, pick one for me:</h4>
            <div className="thisthat-input-container">
            <input type="text" name="name" placeholder="Option 1"/>
            <span>OR</span>
            <input type="text" name="name" placeholder="Option 2"/>
            </div>
            </div>
            </>
              
         
        )
    }
}

export default thisThatQuestion
