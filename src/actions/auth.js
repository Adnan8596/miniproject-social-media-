const addUser = (user) => ({
    type:'ADD_USER',
    user
})
const logout = () => ({
    type:'LOGOUT',
})

export {addUser, logout};

