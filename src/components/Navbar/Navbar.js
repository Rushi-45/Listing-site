import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar1 = () => {
	return (
		<>
			<Nav>
				<Bars />
				
				<NavMenu>
					<NavLink to='/about' activeStyle>
						Page1
					</NavLink>
					<NavLink to='/events' activeStyle>
						Page2
					</NavLink>
					<NavLink to='/annual' activeStyle>
						Page3
					</NavLink>
					<NavLink to='/team' activeStyle>
						Page4
					</NavLink>
					
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink className="nav navbar-nav navbar-right" to='/signin'>Sign In</NavBtnLink>
				</NavBtn>
				<NavBtn>
					<NavBtnLink className="nav navbar-nav navbar-right" to='/signup'>Sign Up</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar1;
