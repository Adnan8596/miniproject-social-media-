const addPosts = (posts) => ({
    type:'GET_POSTS',
    posts
})
const updatePost = post => ({
    type:'UPDATE_POST',
    post
})
const addComment = (comment,postId) => ({
    type:'ADD_COMMENT',
    comment,
    postId
})

export {addPosts,updatePost,addComment}