import React from 'react';

const Direction = (props) => {
	let paragraph = props.info
	const lines = paragraph.split(".")
	
	const inst = lines.map((line,key)=>
			<li key={key}>{ line }</li>
			)
	
	return(
		<div>
		<p className="dir-head">Directions</p>
		<ol class="instruction">
			{ inst }
		</ol>
		</div>
	)
}

export default Direction;
