import React from 'react';

const Ingridients = (props) => {
		let ingvis =[];
		let msrvis=[]
	
		let ingredients=[];
			ingredients.push(props.info.strIngredient1)
			ingredients.push(props.info.strIngredient2)
			ingredients.push(props.info.strIngredient3)
			ingredients.push(props.info.strIngredient4)
			ingredients.push(props.info.strIngredient5)
			ingredients.push(props.info.strIngredient6)
			ingredients.push(props.info.strIngredient7)
			ingredients.push(props.info.strIngredient8)
			ingredients.push(props.info.strIngredient9)
			ingredients.push(props.info.strIngredient10)
			ingredients.push(props.info.strIngredient11)
			ingredients.push(props.info.strIngredient12)
			ingredients.push(props.info.strIngredient13)
			ingredients.push(props.info.strIngredient14)
			ingredients.push(props.info.strIngredient15)
			ingredients.push(props.info.strIngredient16)
			ingredients.push(props.info.strIngredient17)
			ingredients.push(props.info.strIngredient18)
			ingredients.push(props.info.strIngredient19)
			ingredients.push(props.info.strIngredient20)

	
			let measure=[];
				measure.push(props.info.strMeasure1)
				measure.push(props.info.strMeasure2)
				measure.push(props.info.strMeasure3)
				measure.push(props.info.strMeasure4)
				measure.push(props.info.strMeasure5)
				measure.push(props.info.strMeasure6)
				measure.push(props.info.strMeasure7)
				measure.push(props.info.strMeasure8)
				measure.push(props.info.strMeasure9)
				measure.push(props.info.strMeasure10)
				measure.push(props.info.strMeasure11)
				measure.push(props.info.strMeasure12)
				measure.push(props.info.strMeasure13)
				measure.push(props.info.strMeasure14)
				measure.push(props.info.strMeasure15)
				measure.push(props.info.strMeasure16)
				measure.push(props.info.strMeasure17)
				measure.push(props.info.strMeasure18)
				measure.push(props.info.strMeasure19)
				measure.push(props.info.strMeasure20)
		
	
	for(var i=0; i<=ingredients.length;i++){
			if(ingredients[i]){
				ingvis.push(ingredients[i])
			}
	};
	
	for(var x=0; x<=measure.length;x++){
			if(measure[x]){
				msrvis.push(measure[x])
			}
	};

	const ingItems = ingvis.map((ing,key) => 
		<li key={key}> {ing} </li>
	)

	const msrItems = msrvis.map((msr,key) => 
		<li key={key}>{msr}</li>
	)

	return(
		<div id="ingredients">
				<p className="ing-head">Ingredients</p>
				<ul className="ing">
					{ingItems}
				</ul>
				<ul className="msr">
					{msrItems}
				</ul>
				
		</div>
	)
}

export default Ingridients;