import { v4 as uuidv4 } from 'uuid';

export const budgetReducer = (state, action) => 
{
    switch (action.type) {
        case 'ADD_BUDGET':
            return {
                ...state,
                [action.budget.id]: action.budget.amount
            }
    
        default:
            return state
    }
}