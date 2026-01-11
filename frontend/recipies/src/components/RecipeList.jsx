import RecipeCard from './RecipeCard'

export default function RecipeList({ recipes }) {
	if (!recipes || recipes.length === 0) {
		return <p>No recipes found.</p>
	}

	return (
		<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:12}}>
			{recipes.map((r) => (
				<RecipeCard key={r.id} recipe={r} />
			))}
		</div>
	)
}
