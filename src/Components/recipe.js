import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from './header';
import Ingridients from './ingridients';
import Directions from './instructions';
import YoutubePlayer from './player';


const Recipe = (props) => {
	return(
		<div className="selection">
			<Header title={props.data.strMeal} />
			<div className="runner">
				<img className="recipe-cover" src={props.data.strMealThumb} alt="" />
			</div>
				<Link to="/"><i className="fas fa-search new-search"></i></Link>
				<i className="fas fa-shopping-basket"></i>
			<div>
				<img className="recipe-thumb" src={props.data.strMealThumb} alt="" />
			</div>
			<div>
				<p className="specs">Category:</p>
				<p className="specs right">Origin:</p>
				<p className="category">{props.data.strCategory}</p>
				<p className="origin">{props.data.strArea}</p>
			</div>
			<Ingridients info={props.data} />
			<Directions info={props.data.strInstructions} />
			<YoutubePlayer link={props.data.strYoutube} />
		</div>
	)
}

export default Recipe;
