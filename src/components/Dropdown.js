import React, { Component } from 'react'
import {Switch, Link, Route} from 'react-router-dom';






export class Dropdown extends Component {
    render() {
        const {
            show,
            value,
            handleToggle,
            handleChange,
          } = this.props;

return (

        <div className="dropdown-container">
        <label className="arrow">
        <input type="button" value={value} className="dropdown-btn" onClick={handleToggle}/></label>
        <ul className="dropdown-list" hidden={!show}>
        {this.props.options.map((question) => (
            <li className="option" onClick={handleChange(question.question)}>
            <Link to={question.link} style={{textDecoration:"none"}}>
              {question.question}
              </Link></li>
        ))}
        </ul>
            </div>
             )
              }
                }
 

export default Dropdown



