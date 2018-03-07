import React, { Component } from 'react';

class  ListItems extends Component{

	render(){
		const Results = this.props.data;

		let Items;
		if(Results && Results.length > 0){
			Items = Results.map(meal =>
					<li key={meal.idMeal}>{meal.strMeal}</li>
			);	
		}else{
			
			
			let Choice = Math.floor(Math.random()*11);
			Items = ["Sorry, I couldn't find that :(",
							 "Umm, try something else.",
							 "Lol, I've never heard of that.",
							 "I dont think that exists yet.",
							 "Please make a resonable search.",
							 ":| Are you sure that exisit?",
							 "I don't understand your language :|",
							 "Are you serious?",
							 "Try something more realistic please.",
							 "Is that even edible?",
							 "This is your last chance."
							];
			Items = Items[Choice]
		}

		return (
			<div>
		
				{Items}
			</div>
		);
	}
}

export default ListItems;	
	