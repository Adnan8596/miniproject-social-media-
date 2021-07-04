const addPosts = (posts) => ({
    type:'GET_POSTS',
    posts
})
const updatePost = post => ({
    type:'UPDATE_POST',
    post
})

export {addPosts,updatePost}