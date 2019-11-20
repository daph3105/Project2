import React, { Component } from 'react'
import {Switch, Link, Route} from 'react-router-dom';

export class HomePage extends Component {


    render() {
        return (
            <>
            <section className="title">
            <h1>Are you tired of making decisions on your own? Ask the Guru!</h1>
            </section>
            

            <div className="home">
            <section className="home-buttons">
            <button className="btn btn-primary"><Link to="/yes-no" style={{textDecoration:"none", color:"white"}}>Yes / No Questions</Link></button>
            <button className="btn btn-primary"><Link to="/this-that" style={{textDecoration:"none", color:"white"}}>This or That Questions</Link></button>
            <button className="btn btn-primary"><Link to="/decide" style={{textDecoration:"none", color:"white"}}>Let the Guru decide things for you</Link></button>
            <button className="btn btn-primary"><Link to="/advice" style={{textDecoration:"none", color:"white"}}>Ask the Guru for an Advice</Link></button>
            </section> 
                <img className="guru-img1" src="./images/guru1.png"/>
            </div>
            </>
        )
    }
}

export default HomePage


 