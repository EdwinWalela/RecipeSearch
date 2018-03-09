import React from 'react';

const Direction = (props) => {
	return(
		<div>
		<p className="dir-head">Directions</p>
		<p className="direction">{props.info}</p>
		</div>
	)
}

export default Direction;
