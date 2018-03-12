import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<ul className="nav-bar">
				<NavLink to="/search"><li><i class="fas fa-search"></i></li></NavLink>
				<NavLink exact to="/"><li><i class="fas fa-home"></i></li></NavLink>
				<NavLink to="/contact"><li><i class="far fa-comment"></i></li></NavLink>
			</ul>
		</div>
	);
}

export default Navbar;
