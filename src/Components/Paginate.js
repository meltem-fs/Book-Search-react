import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'

const Paginate = ({pages,setCurrentPage}) => {

    const [activePage,setActivePage]=useState(1)

    const numOfPages = []
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }

    const handleSelect = () => {
        if(activePage === numOfPages.length){
            return
        }else {
            setActivePage(activePage + 1)
        }
    }
    const handleSelectPrev = () => {
        if(activePage === 1){
            return
        }else {
            setActivePage(activePage - 1)
        }
    }

    useEffect(() => {
        setCurrentPage(activePage)
    }, [setCurrentPage,activePage])


  return (
    <Pagination>
        <Pagination.Prev onClick={()=>handleSelectPrev()} />
        {
            numOfPages.map((page,index)=>(
                <Pagination.Item key={index} active={page===activePage} onClick={()=>setActivePage(page)}>{page}</Pagination.Item>
            ))
        }
        <Pagination.Next  onClick={()=>handleSelect()} />
    </Pagination>
  )
}

export default Paginate