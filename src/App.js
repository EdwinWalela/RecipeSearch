import React, { Component } from 'react';
import axios from 'axios';
import SearchPage from './Components/search';

class App extends Component {
	
	constructor(props){
		super(props);
		
		};
	
	componentDidMount = () => {
	}
	
  render() {
    return (
			<SearchPage />
		);
  }
}

export default App;
