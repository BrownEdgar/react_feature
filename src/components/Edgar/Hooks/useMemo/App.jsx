import React, { useState, useMemo } from 'react'
import Component from './Component';

export default function App() {
	const [data, setData] = useState([51,54,16,98,32,65,47,12,10]);
	const [bool, setBool] = useState(false)

	const sortList = () => {
		console.log('sorted data...')
		return data.sort()
	}
	const memoizedFunc = useMemo(sortList, [data])

	const MemoComponent = useMemo(() => {
		return <Component />
	}, [])

	console.log('App render...')
	return (
		<div>
			<h1>	{memoizedFunc.join(' | ')}</h1>
			<button onClick={() => setData([...data, 42])}>toggle data</button>
			{/* {MemoComponent} */}

			{/* memo */}
			<Component count={1e6}/>
		</div>
	)
}

