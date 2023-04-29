import React , { useState }from 'react'
import ReactPaginate from 'react-paginate';

export default function Todos(props) {
    const { data } = props

    // const [currentItems, setCurrentItems] = useState(null)
    // const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6
    


    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;

        setItemOffset(newOffset);
    };

  return (
    <>
        <div className='todos'>
            {currentItems.map(todos =>{
                return(
                    <div className='todo'>
                        <ul>
                            <li className='id'>{todos.id}</li>
                            <li className='title'>{todos.title}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
      />
    </>
  )
}
