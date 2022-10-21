
export const listsReducer = (state, action) => 
{
    switch (action.type) {
        case 'ADD_TO_LISTS':
            console.log('month in lists reducer is : ' + [action.listItem.id])
            console.log('list in lists reducer is : ' + [action.listItem.list])
            return {
                ...state,
                [action.listItem.id]: [...action.listItem.list]
            }
        case 'CLEAR_LIST':
            
            return {
                ...state,
                [action.listItem.id]: ''
            }
    
        default:
            return state
    }
}