import React from 'react';

const Ingridients = (props) => {
	return(
		<div>
				<p className="ing-head">Ingridients</p>
				
				<ul className="ing">
					<li>{props.info.strIngredient1}</li>
					<li>{props.info.strIngredient2}</li>
					<li>{props.info.strIngredient3}</li>
					<li>{props.info.strIngredient4}</li>
					<li>{props.info.strIngredient5}</li>
					<li>{props.info.strIngredient6}</li>
					<li>{props.info.strIngredient7}</li>
					<li>{props.info.strIngredient8}</li>
					<li>{props.info.strIngredient9}</li>
					<li>{props.info.strIngredient10}</li>
					<li>{props.info.strIngredient11}</li>
					<li>{props.info.strIngredient12}</li>
					<li>{props.info.strIngredient13}</li>
					<li>{props.info.strIngredient14}</li>
					<li>{props.info.strIngredient15}</li>
					<li>{props.info.strIngredient16}</li>
					<li>{props.info.strIngredient17}</li>
					<li>{props.info.strIngredient18}</li>
					<li>{props.info.strIngredient19}</li>
					<li>{props.info.strIngredient20}</li>
				</ul>
				<ul className="msr">
					<li>{props.info.strMeasure1}</li>
					<li>{props.info.strMeasure2}</li>
					<li>{props.info.strMeasure3}</li>
					<li>{props.info.strMeasure4}</li>
					<li>{props.info.strMeasure5}</li>
					<li>{props.info.strMeasure6}</li>
					<li>{props.info.strMeasure7}</li>
					<li>{props.info.strMeasure8}</li>
					<li>{props.info.strMeasure9}</li>
					<li>{props.info.strMeasure10}</li>
					<li>{props.info.strMeasure11}</li>
					<li>{props.info.strMeasure12}</li>
					<li>{props.info.strMeasure13}</li>
					<li>{props.info.strMeasure14}</li>
					<li>{props.info.strMeasure15}</li>
					<li>{props.info.strMeasure16}</li>
					<li>{props.info.strMeasure17}</li>
					<li>{props.info.strMeasure18}</li>
					<li>{props.info.strMeasure19}</li>
					<li>{props.info.strMeasure20}</li>
				</ul>
				
		</div>
	)
}

export default Ingridients;