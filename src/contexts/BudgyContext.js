import React, {createContext, useState, useReducer, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { budgetReducer } from '../reducers/budgetReducer';
import { listsReducer } from '../reducers/listsReducer';

export const BudgyContext = createContext();




const BudgyContextProvider = (props) => {

    const [budgets, dispatch] = useReducer(budgetReducer, {}, ()=> {
        const localData = localStorage.getItem('budgets');
        return localData? JSON.parse(localData) : {}
    });

    const [lists, dispatchTwo] = useReducer(listsReducer, {}, () => {
        const listData = localStorage.getItem('lists');
        return listData? JSON.parse(listData) : {};
    });

    useEffect(() => {
        localStorage.setItem('budgets', JSON.stringify(budgets))
    }, [budgets])

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(lists))
    }, [lists])
    

    return (
        
        <BudgyContext.Provider value={{ budgets, lists, dispatch, dispatchTwo}}>
            {props.children}
        </BudgyContext.Provider>
    )
}

export default BudgyContextProvider

