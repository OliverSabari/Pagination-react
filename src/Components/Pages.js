
import React from 'react'
import { POSTS_PER_PAGE } from '../Utils/constants'

const Pages = ({posts,updatePageNumber}) => {

  const pageNumbers = []

  for(let i=1; i<=posts.length / POSTS_PER_PAGE;i++){
       pageNumbers.push(i)
  }


  return (
    <div>
  <ul>
    {pageNumbers.map((pageNumber) => {
      return (
          <li key={pageNumber}>
            <a href='!#' onClick={() => updatePageNumber(pageNumber)}>
              {pageNumber}
            </a>
          </li>
      )
    })}
  </ul>
  </div>
  )
}

export default Pages