import React, { Component } from 'react'

export default class Child extends Component {


	componentWillUnmount() {
		console.log('componentWillUnmount :: game over')
	}

	render() {
		return (
			<div>
				<h1>Child component</h1>
			</div>
		)
	}
}
