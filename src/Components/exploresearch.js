import React, { Component } from 'react';
import axios from 'axios';

// Components
import Header from './header';
import NavBar from './navbar';
import ExploreList from './exploreList';


class Explorer extends Component {
	
	state = {
		data: []
	}
	
	componentDidMount(){
		this.performSearch(this.props.data)
	}

	handleSelection = (query) => {
		axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`)
			.then( response => {			
				console.log(response)
			})
			.catch( error => {
			alert(error);
		})
	}

	handleExploreSelection = (query) =>{
		this.props.selection(query);
	}

	performSearch ( query ) {
		axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`)
			.then( response => {
				this.setState({
					data : response.data.meals
				})
			})
			.catch( error => {
			alert(error);
		})
	}
	
	render() {
		return (
			<div>
				<NavBar />
				<Header title="Explore" />
				<ExploreList data={this.state.data} selection={this.handleExploreSelection}/>
				</div>
		);
	}
}

export default Explorer;