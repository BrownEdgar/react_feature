import React, { useState, useEffect} from 'react';
import axios from 'axios';




export default function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setPosts(response.data))
        console.log(posts)
    }, [])



  return (
    <div>
      <h1>JSON-server</h1>
      <posts posts={posts}/>
    </div>
  )
}
