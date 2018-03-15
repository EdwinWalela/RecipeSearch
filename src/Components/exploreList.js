import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ExploreList extends Component {
	handleSelection = (query) => {
		axios.get(`https://www.themealdb.com/api/json/v1/1352/lookup.php?i=${query}`)
		.then(response => {
			this.props.selection(response.data.meals[0])
		})
		}
		
	render(){
		const Results = this.props.data;
		const Items = Results.map((meal,index)=>
			<Link to="/recipe">
				<li className="list-items" onClick={()=>this.handleSelection(meal.idMeal)}>
					<br/><br/>		
					<p className="meal title">{meal.strMeal}</p>
					<img className="meal-thumb explore" src={meal.strMealThumb} alt=""/>
				</li>
			</Link>
		)

		return(
			<div>
				<ul>
					{Items}
				</ul>
			</div>
		);
	}
}

export default ExploreList;
