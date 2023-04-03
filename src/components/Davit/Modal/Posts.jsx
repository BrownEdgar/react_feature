import React from 'react'
import PropTypes from 'prop-types'
import "./Posts.scss"


export default function Posts({posts}) {
  return (
    <div>
        {posts.map((elem,index)=>{
            return(
                <div key={index} >
                    <h2>{elem.id}</h2>
                    <h2>{elem.title}</h2>
                    <h2>{elem.body}</h2>
		<button className='btn_delete' onClick={()=>setisOpen(true)}>delete</button>

					<hr />
                </div>
            )
        })}
    </div>
  )
}
Posts.propsTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.string,
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string
    }))
}