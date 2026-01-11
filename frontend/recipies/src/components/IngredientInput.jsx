import { useState } from 'react'

export default function IngredientInput({ onAdd }) {
	const [value, setValue] = useState('')

	const handleAdd = (e) => {
		e.preventDefault()
		const trimmed = value.trim()
		if (!trimmed) return
		onAdd(trimmed)
		setValue('')
	}

	return (
		<form onSubmit={handleAdd} style={{display:'flex', gap:8}}>
			<input
				placeholder="Add an ingredient (e.g. tomato)"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type="submit">Add</button>
		</form>
	)
}
