import React, { Component } from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";

export class NavDesktop extends Component {
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      
      render() {
        return (
         
            <MDBNavbar color="indigo" dark expand="md" style={{backgroundColor:"#D43A39"}} scrolling fixed="top"
            className= {this.props.homeMenu}>
              <MDBNavbarBrand> 
                <MDBNavLink to="/" style={{color:"white"}}><strong className="white-text">Guru Assistant</strong></MDBNavLink>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse  id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem >
                  <MDBNavLink to="/yes-no" className= {this.props.activeLink1}>Yes / No Questions</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/this-that">This or That Questions</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/decide" className= {this.props.activeLink}>Let the Guru decide things for you</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/advice" > Advice from the Guru </MDBNavLink>
                  </MDBNavItem>
                  {/* <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <span className="mr-2">Dropdown</span>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem> */}
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    {/* <MDBFormInline waves>
                      <div className="md-form my-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                      </div>
                    </MDBFormInline> */}
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
         
          );
        }
      }


export default NavDesktop

