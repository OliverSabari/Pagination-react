import React, { useState, useEffect } from 'react'
import { POST_URL } from '../Utils/constants'

const PostsData = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        const postsdata = await fetch(POST_URL)
        const parsedPosts = await postsdata.json()
        setPosts(parsedPosts)
    }

    return (
        <div>PostsData</div>
    )
}

export default PostsData