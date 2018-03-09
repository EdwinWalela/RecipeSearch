import React, { Component } from 'react';
import { BrowserRouter, Route , Switch, withRouter } from 'react-router-dom';
import Recipe from './Components/recipe'

// components
import SearchPage from './Components/search';

class App extends Component {
	
	state = {
		object : []
	}
	
	handleSelection = (query) => {
		this.setState({
			object : query
		})
	}
	
  render() {
    return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" render={ () => <SearchPage selection={this.handleSelection}/>}/>
						<Route path="/recipe" render={ () => <Recipe data={this.state.object} /> }/>
					</div>
				</BrowserRouter>
			</div>
			
		);
  }
}

export default App;
