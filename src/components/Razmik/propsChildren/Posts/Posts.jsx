import React from 'react'
import PropTypes from 'prop-types'


export default function  Posts ({posts}) {
  return (
    <div>
        {posts.map(post => {
					return (
						<div key={post.id}>
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
					)
				})}
    </div>
  )
}
Posts.propsTypes = {
    posts:PropTypes.arrayOf(PropTypes.shape({
        userId:PropTypes.number,
        id:PropTypes.number,
        title:PropTypes.string,
        body:PropTypes.string
    }))
}
