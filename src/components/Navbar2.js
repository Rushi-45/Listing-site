import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './Navbar/NavbarElements';
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
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Houses</Link>
            </li>
            <NavBtn>
              <NavBtnLink className="nav navbar-nav navbar-right" to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink className="nav navbar-nav navbar-right" to='/signup'>Sign Up</NavBtnLink>
            </NavBtn>
          </ul>
        </div>
      </nav>
    );
  }
}
