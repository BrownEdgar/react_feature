import React from 'react'
import ReactPaginate from 'react-paginate'
import {GrLinkNext,GrLinkPrevious} from 'react-icons/gr'

export default function Paginate({total,perPage,handleClick}) {
    const pageCount =  Math.ceil(total/perPage)

  return (
    <div className='Pagination'>
        <ReactPaginate
            nextLabel={<GrLinkNext/>}
            onPageChange={handleClick}
            pageCount={pageCount}
            pageRangeDisplayed={3}
            previousLabel={<GrLinkPrevious/>}
            renderOnZeroPageCount={null}
            activeClassName='active-page'
            marginPagesDisplayed = {3}
        />
    </div>
  )
}
