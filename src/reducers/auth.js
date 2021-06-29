const authReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return {...action.user.user, token:action.user.token}
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}

export default authReducer;
