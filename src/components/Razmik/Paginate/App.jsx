import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts'
import ReactPaginate from 'react-paginate'

import './App.scss'

export default function App() {
    const [posts, setPosts] = useState([])
    const [perPage, setPerPage] = useState(10)
    const [page, setPage] = useState(1)
    const [total,SetTotal] = useState(100)
    
    const pageCount =  Math.floor(total/perPage)
    useEffect(() => {
        const up = (perPage * page);
        const start = (up - perPage);
    async function getData(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_limit:perPage,
					_start:start
				}
			});
			setPosts(response.data)
        }
      getData()
   } , [page])
   const handleCLick = (event)=>{
    
   //setPage(event.selected)
   console.log(event.selected)
   
    
   }
return (
    <div>
        <Posts posts = {posts}/> 
       
    <div className='Pagination'>
        <ReactPaginate
        nextLabel="next >"
        onPageChange={handleCLick}
        pageCount={pageCount}
        pageRangeDisplayed={10}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
    </div>
  )
}
