import React, {useEffect, useState} from 'react';
import  Posts  from "./Posts";
const APY = process.env.REACT_APP_API_KEY;
export default function App() {
const [data,setData] = useState() 
useEffect(() => {
	fetch(`${APY}/posts`)
	.then(response => response.json())
	.then(json => setData(json))
}, [])
	return (
		<div>
    
		<Posts  posts={data}/>
		</div>
	)
}
