import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function App() {
	const [data, setData] = useState([])


	useEffect(() => {
		async function getData() {
			// tarberak 1
			// axios('https://jsonplaceholder.typicode.com/users')
			// 	.then(response => setData(response.data))

			// tarberak 2
			// const response = await axios('https://jsonplaceholder.typicode.com/users');
			// setData(response.data)
			// tarberak 3
			// const response = await axios({
			// 	method: "get",
			// 	url: 'https://jsonplaceholder.typicode.com/users',
			// 	timeout: 1000
			// });
			// setData(response.data)

			// tarberak 4
			// const response = await axios('https://jsonplaceholder.typicode.com/users', {
			// 	params: {
			// 		_limit: 3,
			// 		_start:5
			// 	}
			// });
			// setData(response.data)

			// Tarberak 5
			// axios.get('/users').then(response => setData(response.data))
			//  axios.get('/todos', {
			// 	params: {
			// 		_limit: 6
			// 	}
			//  }).then(response => setData(response.data))

			// tarberak 6
			// axios.all([
			// 	axios.get('https://jsonplaceholder.typicode.com/users'),
			// 	axios.get('https://jsonplaceholder.typicode.com/todos'),
			// 	axios.get('https://jsonplaceholder.typicode.com/posts'),
			// 	axios.get('https://jsonplaceholder.typicode.com/comments'),
			// ]).then(([users, todos, posts, comments]) => {
			// 	console.log({ users, todos, posts, comments })
			// }).catch(err => {
			// 	 console.log(err)
			// })

		}
		getData()
	}, [])

	return (
		<div>
			{JSON.stringify(data, null, 2)}
		</div>
	)
}
