import React from 'react'

export default function Posts({posts,loading}) {
    if (!loading) {
        return <h1>Loading...</h1>
      }
  return ( 
    <>
    <h1>Posts</h1>
    <div className='Post'>
       {posts.map((elem)=>{
			return(
				<div key = {elem.id} className='Post-item' to = {`${elem.id}`}>
					<h2 className='Post-title'>{elem.title}</h2>
					<p className='Post-body'>{elem.body}</p>
				</div>
				)
				})}
	</div>
    </>
    )
}
