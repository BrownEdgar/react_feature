import React, { useState, useMemo } from 'react'
import Component from './Component';

export default function App() {
	const [data, setData] = useState([51,54,23,12,67,444]);
	 const [bool, setBool] = useState(false)

	const sortList = () => {
		console.log("sorted data...");
		return data.sort()
	}
  const memoizedFunc = useMemo(sortList, [data])

	const MemoComponent = useMemo(() => {
		return <Component />
	}, [])
  console.log("App render...");
	return (
		<div>
			<h1>{memoizedFunc.join(" | ")}</h1>
			<button onClick={() => setData([...data, 42])}>toogle data</button>
			{/* {MemoComponent} */}
			<Component count={1e6} />
			<Component count={1e9} />
		</div>
	)
}
