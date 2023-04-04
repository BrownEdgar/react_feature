import React from 'react'
import PropTypes from 'prop-types'

export default function Posts({ users }) {
	return (
		<div>
			{users.map((elem,index)=>{
				return(
					<div key={index}  >
						<h2>{elem.name}</h2>
						{/* <h2>{elem.username}</h2> */}
						<hr />
					</div>
				)
			})}
		</div>
	)
}
// Posts.propsTypes = {
// 	users: PropTypes.arrayOf(PropTypes.shape({
// 		userId: PropTypes.number,
// 		id: PropTypes.number,
// 		title: PropTypes.string,
// 		body: PropTypes.string
// 	}))
// }