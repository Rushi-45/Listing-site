import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../images/rc.jpg';
export default class Navbar2 extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">          
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li className="mr-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-5">
              <Link to="/rooms">Houses</Link>
            </li>
            <div className="nav-header">
              <Link to="/">
                <img className="saleLogo" src={logo} alt="House Sale" />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <li className="ml-5">
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="ml-2">
              <Link to="/signup">Sign Up</Link>
            </li>            
          </ul>
        </div>
      </nav>
    );
  }
}
