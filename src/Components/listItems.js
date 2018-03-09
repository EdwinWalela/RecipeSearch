import React, { Component } from 'react';
import { Random } from './Data/noResults';
import { Link, BrowserRouter } from 'react-router-dom';

class  ListItems extends Component{

	handleSelection = (query) => {
		this.props.selection(query);
	}
	
	render(){
		const Results = this.props.data;
		
		let Items;
		if(Results && Results.length > 0){
			Items = Results.map((meal,index) =>
					<li className="list-items" key={meal.idMeal}>
						<p className="meal title">{meal.strMeal}</p>
						<p className="meal area">{meal.strArea}</p>
						<img className="meal-thumb" src={meal.strMealThumb} alt=""/>
						<Link to="/recipe">
							<p className="cook" onClick={()=> this.handleSelection(index)}>Cook Now</p>
						</Link>
					</li>
			);	
		}else{
			let Choice = Math.floor(Math.random()*12);
			Items = Random[Choice]
		}
		return (
			<div>
				<ul className="ul-list">
					{Items}
				</ul>
			</div>
		);
	}
}

export default ListItems;	
	