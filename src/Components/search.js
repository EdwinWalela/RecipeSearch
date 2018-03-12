import React, { Component } from 'react';
import axios from 'axios';

// Components
import Header from './header';
import SearchBar from './searchbar';
import ResultContainer from './resultsContainer';
import NavBar from './navbar';



class SearchPage extends Component {
	
	state = {
		results : [],
		loading : true
	}
	
	performSearch = (query) => {
		axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
			.then(response => {
				this.setState({
					results : response.data.meals,
					loading : false
				})
			})
			.catch(error => {
				console.log(error);
		});
	} 
	
	handleSelection = (query) => {
		this.props.selection(query);
	}
	
	render(){
		return(
			
			<div>
			<NavBar />
				<Header title="Search" />
				<SearchBar search={this.performSearch} />
					{
						(this.state.loading)?
							<p style={{"textAlign":"center"}}>make a search...</p>:
							<ResultContainer results={this.state.results} onSelect={this.handleSelection} />
					}
			
			</div>
		
		);
	}
}

export default SearchPage;