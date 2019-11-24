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
            <Link to="/yes-no" style={{textDecoration:"none", color:"white"}}><button className="btn btn-danger"> Yes / No Questions</button></Link>
            <Link to="/this-that" style={{textDecoration:"none", color:"white"}}><button className="btn btn-danger"> This or That Questions</button></Link>
            <Link to="/decide" style={{textDecoration:"none", color:"white"}}><button className="btn btn-danger"> Let the Guru decide things for you</button></Link>
            <Link to="/advice" style={{textDecoration:"none", color:"white"}}><button className="btn btn-danger"> Ask the Guru for an Advice</button></Link>
            </section> 
                <img className="guru-img-home" src="./images/guru1.png"/>
            </div>
            </>
        )
    }
}

export default HomePage


 