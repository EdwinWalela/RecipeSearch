import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from './header';
import NavBar from './navbar';

class Explore extends Component {
	
	handleExplore = (query) => {
		this.props.explore(query)
	}
	
	render(){
		return(
			<div>
				<NavBar />     
				<Header title="Explore" />

				<div className="grid">
					<Link to ="/explore/search">
						<div className="grid-items sweet" onClick={ () => this.handleExplore("Side")}>
							<span>
								<img className="logo-joy" src="https://i.imgur.com/EEXKnjt.png" alt=""/>
							</span> Sides
						</div>
					</Link>
					<Link to ="/explore/search">
						<div className="grid-items sides" onClick={ () => this.handleExplore("desert")}>
							<span>
								<img className="logo-joy" src="https://i.imgur.com/nsDzfTn.png" alt=""/>
							</span> Desert
						</div>
					</Link>
					<Link to ="/explore/search">
						<div className="grid-items vegan" onClick={ () => this.handleExplore("vegan")}>
							<span>
								<img className="logo-joy" src="https://i.imgur.com/SofYufK.png" alt=""/>
							</span> Vegan
						</div>
					</Link>
					<Link to ="/explore/search">
						<div className="grid-items lamb" onClick={ () => this.handleExplore("lamb")}>
							<span>
								<img className="logo-joy" src="https://i.imgur.com/fyh1rD3.png" alt=""/>
							</span> Lamb
						</div>
					</Link>
				</div>
			</div>
		);
	}
}
export default Explore;
