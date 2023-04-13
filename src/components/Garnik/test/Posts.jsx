import React from 'react'
import PropsTypes from "prop-types"
export default function Posts({posts}) {
	return (
		<div>
    {posts.map((elem,index) => {
			return(
				<div key="index">
					<h2>{elem.title}</h2>
					<h2>{elem.body}</h2>
					<hr />
				</div>
			)
		})}
		</div>
	)
}
Posts.propsTypes = {
	posts: PropsTypes.arrayOf(PropsTypes.shape({
		userId: PropsTypes.number,
		id: PropsTypes.number,
		title: PropsTypes.string,
		body: PropsTypes.string
	}))
}