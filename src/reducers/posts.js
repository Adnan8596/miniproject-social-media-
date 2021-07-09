const postsReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_POSTS":
            return action.posts;
        case "UPDATE_POST":
            return state.map((post) => {
                if(post._id === action.post._id)
                    return action.post
                return post
            })
        case "ADD_COMMENT":
            return state.map(post => {
                if(post._id === action.postId)
                    return {
                        ...post,
                        comments:[...post.comments,action.comment]
                    }
                return post
            })
        default:
            return state
    }
}
export default postsReducer