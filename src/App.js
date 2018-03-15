import React, { Component } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import axios from 'axios';

// components
import SearchPage from './Components/search';
import Recipe from './Components/recipe';
import Landing from './Components/home';
import Explore from './Components/explore';
import About from './Components/about';
import Explorer from './Components/exploresearch';


class App extends Component {
	
	componentWillMount(){
		axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
		.then( response=>{
			this.setState({ object: response.data.meals[0]})
		})
	}
	
	state = {
		object 				: [],
		explore 			: [],
		exploreSelect : [],
	}
	
	handleSelection = (query) => {
		this.setState({
			object : query
		})
	}
	
	handleExplore = (query) => {
		this.setState({
			explore : query
		})
	}
	
	handleExploreSelection = (query) => {
		this.setState({
			object : query
		})
	}
	
  render() {
    return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={ Landing }/>
						<Route path="/contact" component={ About }/>
						<Route path="/recipe" render={ () => <Recipe data={this.state.object} /> }/>
						<Route path="/search"  render={ () => <SearchPage selection={this.handleSelection}/>}/>
						<Route exact path="/explore" render={ () =>  <Explore explore={this.handleExplore} />}/>
						<Route path="/explore/search" render={ () => <Explorer data={this.state.explore} selection={this.handleExploreSelection} />}/>
					</div>
				</BrowserRouter>
			</div>
			
		);
  }
}

export default App;
