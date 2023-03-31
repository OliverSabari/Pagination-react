import React, { useState, useEffect } from 'react'
import { POST_URL, slicePosts } from '../Utils/constants'
import DisplayPosts from './DisplayPosts'
import Pages from './Pages'

const PostsData = () => {

    const [posts, setPosts] = useState([])

    const [currentPage , setCurrentPage ] = useState(1)
    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        const postsdata = await fetch(POST_URL)
        const parsedPosts = await postsdata.json()
        setPosts(parsedPosts)
    }

    const postsLimit = slicePosts(currentPage , posts)

    return (
        <div>
            <DisplayPosts posts = {postsLimit} />
            <Pages posts = {posts} />
        </div>
    )
}

export default PostsData