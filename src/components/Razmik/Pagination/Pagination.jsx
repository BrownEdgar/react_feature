import axios from 'axios'
import React ,{useState,useEffect} from 'react'
import Posts from './Posts'

export default function Pagination() {
    const [posts, setPosts] = useState([])
    const [perPage, setPerPage] = useState(5)
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        function getData(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>setPosts(response.data))
            .catch(err => console.log('invalid url',err))
        }
      getData()
   } , [])
   const lastPage = perPage * page;
   const currentPosts = posts.slice(lastPage - perPage,lastPage)
    const handleClick = (pageNumber)=>{
        setPage(pageNumber)
   }
    
  return (
    <div>
        <Posts posts = {currentPosts} total = {100} perPage ={perPage}  handleClick = {handleClick}/>
    </div>
  )
}
