import React from 'react';

const YoutubePlayer = (props) => {
	const Vid = props.link
	return(
		<div className="player">
			<p>Lost? Follow along on <a href={Vid}>Youtube <i class="fab fa-youtube"></i></a></p>
		</div>
	)
}

export default YoutubePlayer;

