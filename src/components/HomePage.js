import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
    MDBHamburgerToggler } from 'mdbreact';

export class HomePage extends Component {
    state = {
        collapse1: false,
        collapseID: ''
      }
      
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
      }
      
      toggleSingleCollapse = collapseId => {
        this.setState({
          ...this.state,
          [collapseId]: !this.state[collapseId]
        });
      }

    render() {
        return (
            <>
    
      <MDBContainer className="hamburger-menu" style={{backgroundColor:"#D43A39", padding:"10px"}}>
        <MDBNavbar color="amber lighten-4" style={{ marginTop: '0px' }} light>
          <MDBContainer>      
            <MDBHamburgerToggler color="white" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/yes-no" style={{color:"white"}}>Yes / No Questions</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/this-that" style={{color:"white"}}>This or That Questions</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/decide" style={{color:"white"}}>Let the Guru decide things for you</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/advice" style={{color:"white"}}>Ask the Guru for an Advice</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
   
           
            <h1 className="home-h1">Are you tired of making decisions on your own?</h1>
            <h2 className="home-h2">Ask the Guru!</h2>
         
            

            <div className="home">
            <section className="home-buttons">
            <button className="btn btn-danger" style={{height:"70px"}}><Link to="/yes-no" style={{textDecoration:"none", color:"white"}}>Yes / No Questions</Link></button>
            <button className="btn btn-danger" style={{height:"70px"}}><Link to="/this-that" style={{textDecoration:"none", color:"white"}}>This or That Questions</Link></button>
            <button className="btn btn-danger" style={{height:"70px"}}><Link to="/decide" style={{textDecoration:"none", color:"white"}}>Let the Guru decide things for you</Link></button>
            <button className="btn btn-danger" style={{height:"70px"}}><Link to="/advice" style={{textDecoration:"none", color:"white"}}>Ask the Guru for an Advice</Link></button>
            </section> 
                <img className="guru-img1" src="./images/guru1.png"/>
            </div>
            </>
        )
    }
}

export default HomePage


 