const addUser = (user) => ({
    type:'ADD_USER',
    user
})
const addJoinedCommunity = community => ({
    type:'JOINED_COMMUNITY',
    community
})
const logout = () => ({
    type:'LOGOUT',
})

export {addUser, logout, addJoinedCommunity};

