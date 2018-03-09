import React, { Component } from 'react';
import ListItems from './listItems';


class ResultsContainer extends Component {
	
	handleSelection = (query) => {
		this.props.onSelect(this.props.results[query]);
	}
	
	render(){
		const Data = this.props.results;
		return(
			<div className="result-container">
				<ListItems data={Data} selection={this.handleSelection}/>
			</div>
		);
	}
}


export default ResultsContainer;
