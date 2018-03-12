import React from 'react';
import Header from './header';
import NavBar from './navbar';

const Landing = () => {
	return (
		<div className="landing">
			<NavBar />
			<Header title="Home" />
		</div>
	);
}

export default Landing;