
export const POST_URL = "https://jsonplaceholder.typicode.com/posts"

export const POSTS_PER_PAGE = 10


export const slicePosts = (currentPage , posts) => {
    const lastIndex = currentPage * POSTS_PER_PAGE
    const firstIndex = lastIndex - POSTS_PER_PAGE
    return posts.slice(firstIndex , lastIndex)
}