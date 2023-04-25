import React, { Suspense } from 'react'
import Posts from './Posts'

export default function App() {
	return (
		<div>
				<h1>React Suspense</h1>
			<Suspense fallback={<h1>Loading posts...</h1>}>
				<Posts />
			</Suspense>

		</div>
	)
}
