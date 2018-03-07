import React, { Component } from 'react';
import axios from 'axios';

// Components
import Header from './header';
import SearchBar from './searchbar';
import ResultContainer from './resultsContainer';


class SearchPage extends Component {
	
	state = {
		results : [],
		loading : true
	}
	
	performSearch = ( query = 'chicken') => {
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
	
	render(){
		return(
			<div>
				<Header title="Search" />
				<SearchBar search={this.performSearch} />
				{
					(this.state.loading)?
						<p style={{"textAlign":"center"}}>make a search...</p>:
						  <ResultContainer results={this.state.results} />
				}
			</div>
		);
	}
}

export default SearchPage;