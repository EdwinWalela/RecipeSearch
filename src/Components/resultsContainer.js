import React from 'react';
import ListItems from './listItems';


const ResultsContainer = (props) => {
	
	const Data = props.results;
	console.log(Data);
	return(
		<div className="result-container">
			<ListItems data={Data}/>
		</div>
	);
}

export default ResultsContainer;
