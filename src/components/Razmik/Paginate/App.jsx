import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts'
import Paginate from './Paginate'

import './App.scss'

export default function App() {
    const [posts, setPosts] = useState([])
    const [perPage, setPerPage] = useState(6)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        const up = (perPage * page);
        const start = (up - perPage);
        async function getData(){
            setLoading(false)
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_limit:perPage,
					_start:start
				}
			});
			setPosts(response.data)
            setLoading(true)
        }
        getData()
    },[page])
    const handleCLick = (event)=>{
        setPage(event.selected+1)
    }
    
    return (
    <div className='container'>
        <Posts posts = {posts}  loading={loading}/> 
        <Paginate total={100} perPage={perPage} handleClick={handleCLick}/>
    </div>
  )
}
