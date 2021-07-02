const authReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return {...action.user.user, token:action.user.token}
        case 'LOGOUT':
            return {}
        case 'JOINED_COMMUNITY':
            return {
                ...state,
                joinedcommunity:[...state.joinedcommunity,action.community]
            }
        default:
            return state
    }
}

export default authReducer;
