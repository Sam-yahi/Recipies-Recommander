export default function RecipeCard({ recipe }) {
	return (
		<div className="recipe-card" style={{border:'1px solid #ddd', padding:12, borderRadius:6}}>
			{recipe.image && (
				<img src={recipe.image} alt={recipe.title} style={{width:'100%', borderRadius:6}} />
			)}
			<h3>{recipe.title}</h3>
			<p style={{fontSize:14, color:'#555'}}>{recipe.description}</p>
			<p style={{fontSize:12, color:'#777'}}>
				Ingredients: {recipe.ingredients.join(', ')}
			</p>
		</div>
	)
}
