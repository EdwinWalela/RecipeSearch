import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<ul className="nav-bar">
				<NavLink to="/search"><li><i className="fas fa-search"></i></li></NavLink>
				<NavLink exact to="/"><li><i className="fas fa-home"></i></li></NavLink>
				<NavLink to="/explore"><li><i className="fas fa-th-large"></i></li></NavLink>
				<NavLink to="/contact"><li><i className="far fa-comment"></i></li></NavLink>
		
		</ul>
		</div>
	);
}

export default Navbar;
