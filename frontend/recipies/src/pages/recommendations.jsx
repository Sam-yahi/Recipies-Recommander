import Header from "../assets/header"
import IngredientInput from "../components/IngredientInput"
import RecipeList from "../components/RecipeList"
import { useState, useMemo } from 'react'
import "./style.css"

const mockRecipes = [
	{ id: '1', title: 'Tomato Pasta', ingredients: ['tomato','pasta','garlic'], description: 'Quick tomato pasta with garlic and basil.' },
	{ id: '2', title: 'Chicken Salad', ingredients: ['chicken','lettuce','olive oil'], description: 'Light salad with grilled chicken.' },
	{ id: '3', title: 'Avocado Toast', ingredients: ['avocado','bread','lemon'], description: 'Simple avocado toast with citrus.' },
	{ id: '4', title: 'Garlic Shrimp', ingredients: ['shrimp','garlic','butter'], description: 'Sautéed shrimp with garlic butter.' },
]

const Recommendations = () => {
	const [ingredients, setIngredients] = useState([])

	const addIngredient = (ing) => {
		if (ingredients.includes(ing.toLowerCase())) return
		setIngredients((s) => [...s, ing.toLowerCase()])
	}

	const clear = () => setIngredients([])

	const results = useMemo(() => {
		if (ingredients.length === 0) return []
		return mockRecipes.filter(r => r.ingredients.some(i => ingredients.includes(i)))
	}, [ingredients])

	return (
		<>
			<header><Header /></header>
			<main style={{padding:16}}>
				<h2>Get Recommendations</h2>
				<p>Enter ingredients you have and get recipe suggestions.</p>

				<IngredientInput onAdd={addIngredient} />

				<div style={{marginTop:12}}>
					<strong>Ingredients:</strong>
					<div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:8}}>
						{ingredients.map(i => (
							<span key={i} style={{padding:'6px 10px',background:'#f0f0f0',borderRadius:999}}>{i}</span>
						))}
						{ingredients.length > 0 && (
							<button onClick={clear} style={{marginLeft:8}}>Clear</button>
						)}
					</div>
				</div>

				<section style={{marginTop:20}}>
					<h3>Recommendations</h3>
					{ingredients.length === 0 ? (
						<p>Add some ingredients to see suggestions.</p>
					) : (
						<RecipeList recipes={results} />
					)}
				</section>
			</main>
		</>
	)
}

export default Recommendations
