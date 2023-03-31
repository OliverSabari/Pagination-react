import React from 'react'

const DisplayPosts = ({posts}) => {



  return (
    <ul>
        { 
            posts?.map((item) => {
                return (
                <li key={item.id}>
                    {item.title}
                </li>
                )
            })
    }
    </ul>
  )
}

export default DisplayPosts