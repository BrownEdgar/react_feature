import React, {Component} from 'react'
import Child from './Child'

export default class App extends Component {
	state = {
		count: 0,
		posts:[]
	}

	componentDidMount() { 
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
			.then(data => this.setState({ posts: data}))	
	}


	handleClick = () => {
		this.setState({count: this.state.count + 1})
	}


	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate run...')
	}

	shouldComponentUpdate(nextProps, nextState) { 
		console.log('shouldComponentUpdate')
		if (nextState.count >= 10) {
				return false;
		}
		return true;
	}
	render() {
		const { count, posts } = this.state
		return (
			<div>
				<h1>Class Component {count}</h1>
				<button onClick={this.handleClick}>click </button>
				{/* <pre>
					{JSON.stringify(posts, null,1)}
				</pre> */}
				{
					count % 2 === 0 ? <Child /> : null
				}
			</div>
		)
	}
}