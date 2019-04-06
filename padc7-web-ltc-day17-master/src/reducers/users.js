const users = (state = [], action) => {
    switch (action.type) {
        case "ADD_NEW_USERS":
            return [
                ...state,
                {
                    id: action.user.id,
                    name: action.user.name,
                    password: action.user.password
                   

                }
            ]
        case 'FETCH_USERS':
            return [...action.payload]
        default:
            return state
    }
}

export default users