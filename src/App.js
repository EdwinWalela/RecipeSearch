import React, { Component } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';

// components
import SearchPage from './Components/search';
import Recipe from './Components/recipe';
import Landing from './Components/home';
import About from './Components/about';

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
						<Route exact path="/" component={ Landing }/>
						<Route path="/recipe" render={ () => <Recipe data={this.state.object} /> }/>
						<Route path="/search"  render={ () => <SearchPage selection={this.handleSelection}/>}/>
						<Route path="/contact" component={ About }/>
					</div>
				</BrowserRouter>
			</div>
			
		);
  }
}

export default App;
