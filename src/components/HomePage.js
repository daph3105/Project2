import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import NavDesktop from './NavDesktop';


export class HomePage extends Component {
    

    render() {
        return (
            <>  
            <NavDesktop homeMenu={"home-nav"}/>
        

            <h1 className="home-h1">Are you tired of making decisions on your own?</h1>
            <h2 className="home-h2">Ask the Guru!</h2>
         
            

            <div className="home">
            <section className="home-buttons">
            <button className="btn btn-danger" style={{height:"70px"}}><Link to="/yes-no" style={{textDecoration:"none", color:"white"}}>Yes / No Questions</Link></button>
            <button className="btn btn-danger" style={{height:"70px"}}><Link to="/this-that" style={{textDecoration:"none", color:"white"}}>This or That Questions</Link></button>
            <button className="btn btn-danger" style={{height:"70px"}}><Link to="/decide" style={{textDecoration:"none", color:"white"}}>Let the Guru decide things for you</Link></button>
            <button className="btn btn-danger" style={{height:"70px"}}><Link to="/advice" style={{textDecoration:"none", color:"white"}}>Ask the Guru for an Advice</Link></button>
            </section> 
                <img className="guru-img-home" src="./images/guru1.png"/>
            </div>
            </>
        )
    }
}

export default HomePage


 