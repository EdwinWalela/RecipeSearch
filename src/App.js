import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './Components/search';

class App extends Component {
	
	constructor(props){
		super(props);
		
		};
	
	componentDidMount = () => {
		axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
		.then(response => {
			console.log(response.data.meals);
		})
		.catch( error => {
			console.log(error);
		});
	}
	
  render() {
    return (
			<SearchBar />
		);
  }
}

export default App;
