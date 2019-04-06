const articles = (state = [], action) => {
    switch (action.type) {
        case "ADD_NEW_ARTICLES":
            return [
                ...state,
                {
                    id: action.article.id,
                    title: action.article.title,
                    content: action.article.content,
                    created_by: action.article.created_by

                }
            ]
        case 'FETCH_ARTICLES':
            return [...action.payload]
        case 'DELETE_ARTICLES':
        return state.filter(item=> item.id !== action.id)

        default:
            return state
    }
}

export default articles