import React ,{useState , useEffect} from 'react'
import Modal from './Modal'
import Posts from './Posts'
import "./App.scss"
const API_KEY = process.env.REACT_APP_API_KEY || "https://jsonplaceholder.typicode.com/posts"





export default function App() {
  const [isOpen, setisOpen] = useState(false)
  const [divShow, setdivShow] = useState(true)
  const [data, setdata] = useState([])
  useEffect(()=>{
      fetch(`${API_KEY}/posts`)
    .then(response => response.json())
    .then(json => setdata(json))
  },[])
  return (
  <div>
    {
      divShow && (
        <div className='posts'> 
        <Posts posts={data}/>
         <button className='btn_delete'
         onClick={()=>setisOpen(true)}
         >delete </button>
        </div>
       
      )
    }
		{isOpen && <Modal>
    <div className='Modal-Content'>
            <h2>Are You Sure ?</h2>
            <button onClick={()=> {setisOpen(false); setdivShow(false)} }>Yes</button>
            <button onClick={()=> setisOpen(false)}>No</button>
    </div>
    </Modal>
    }
    
	</div>
  )
}
