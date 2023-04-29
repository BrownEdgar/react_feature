import  axios  from 'axios'
import React ,{useState , useEffect} from 'react'
import Post from './Post'


export default function Pagination() {
const [posts, setPosts] = useState([])
const [perPage, setPerPage] = useState(10)
const [page, setPage] = useState(2)


const currectPosts = perPage*page;
const linePost = currectPosts-perPage;
const drowPost = posts.slice(linePost,currectPosts)
console.log(drowPost);


useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => setPosts(response.data)
  .catch(err =>console.log("invalid url: " ,err)))
}, [])


  return (
    <div>
      <Post currectPosts={drowPost} total={100} perPage={perPage} hancleClick={handleClick}/>
    </div>
  )
}
