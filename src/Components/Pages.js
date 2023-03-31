import React from 'react'
import { Pagination } from 'react-bootstrap'
import { POSTS_PER_PAGE } from '../Utils/constants'

const Pages = ({posts}) => {

  const pageNumbers = []

  for(let i=1; i<=posts.length / POSTS_PER_PAGE;i++){
       pageNumbers.push(
        <Pagination.Item key={i} >
           {i}
        </Pagination.Item>)
  }


  return (
    <div>
  <Pagination>
    {pageNumbers}
  </Pagination>
  </div>
  )
}

export default Pages