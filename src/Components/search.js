import React,{ Component } from 'react';


class SearchBar extends Component{
	
	state = {
		query : ''
	}

	handleSubmit = (e) => {
		e.preventDefault();
		e.currentTarget.reset();
	}
	
	handleChange = (e) => {
		this.setState({
			query :  e.target.value
		})
	}
	
	render(){
		return(
			<div>
				<p className="search-tip"><strong>Tip:</strong> Use Simple Terms e.g "chicken" :)</p>
				<form onSubmit={this.handleSubmit}>
					<input type="text"
						 className="search-input"
						 onChange={this.handleChange} 
						 placeholder="Suprise me..."
						   />
					<i class="fas fa-search"></i>
				</form>
			</div>
		);
	}
}

export default SearchBar;