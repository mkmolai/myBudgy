import React, {useState, useEffect, useContext, useRef} from 'react';
import '../style/view-list/viewlist.css';
import {useParams, useHistory} from 'react-router-dom'
import { BudgyContext } from '../contexts/BudgyContext';
import useForm from '../hooks/useForm';
import Alert from '../Alert';
import List from '../List';
import ListItem from '../ListItem';
import { v4 as uuidv4 } from 'uuid';
import empty from '../assets/NoList.png'

function ViewList() {

    const {lists, budgets, dispatchTwo} = useContext(BudgyContext);
    
    const {id} = useParams();
    const history = useHistory()
    console.log('DIGIT IS : ' + id)
    
    useEffect(() => {
        if(lists[id])
        {
            setList([...lists[id]])
        }
    }, [lists])

    const [total, setTotal] = useState();

    useEffect(() => {
        if(lists[id])
        {
            const calculateTotal = () => {
                const monies = lists[id].map(item => Number.parseInt(item.price));
                console.log('MONIES:' + monies)
                let sum = 0;
                for (let i = 0; i < monies.length; i++) {
                    sum += monies[i]   
                }
                setTotal(sum)
            }
            calculateTotal()

        }

    }, [lists[id]])



    //--------------------------------------------           -------------------------------------------------------------------
    const {item, setItem, handleChange} = useForm();
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        msg: '', 
        type: 'error',
    });

    //how is isEditting triggered?

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!item.name || !item.price){
            showAlert(true, 'Please complete your input', 'error')
        }
        else if(item.name && isEditing)
        {
            const newList = list.map(list_item => {
                if(list_item.id === editID)
                {
                    return {...list_item, name: item.name, price: item.price}
                }
                return list_item
            })


            setList([...newList])
            setItem({name: '', price: ''});
            showAlert(true,'You have successfully edited an item', 'success')
        }
        else{
            const newItem = {id: uuidv4(), name: item.name, price: item.price, completed: false};
            setList([...list, newItem]);
            showAlert(true, `Successfully added ${item.name} to your list`, 'success')
            setItem({name: '', price: ''});
                }
    }


    const showAlert = (show = false, msg = '', type = '') => {
        setAlert({show, msg, type});
    }

    const handleSave = () => {
        console.log('LIST HAS : ' + list)
        dispatchTwo({type: 'ADD_TO_LISTS', listItem: {id, list}})
    }

    const removeItem = (id) => {
        showAlert(true, 'Item was removed from your list', 'error');
        const newList = list.filter(item => item.id!== id);
        setList([...newList])
    }

    const clearList = () => {
        showAlert(true, 'Emptied List', 'error')
        dispatchTwo({type: 'CLEAR_LIST', listItem: {id}})
    }

    const editItem = (id) => {
        const targeted = list.find(item => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setItem({
            name: targeted.name,
            price: targeted.price,
        });
    }

    const [view, setView] = useState('list')

    
    const [budgetInfoHoverText, setBudgetInfoHoverText] = useState('')

    const handleBudgetInfoHover = () => {
        budgets[id]? setBudgetInfoHoverText('edit') : setBudgetInfoHoverText('make')   
    }
    const handleBudgetInfoHoverLeave = () => {
        setBudgetInfoHoverText('')
    }
    const [isAmending, setIsAmending] = useState(false);

    const handleAmend = () => {
        if(list.length === 0)
        {
            dispatchTwo({type: 'CLEAR_LIST', listItem: {id}})
        }
        setView('');
        setIsAmending(true)
    }
    const handleCancel = () => {
        setView('list');
        setIsAmending(false)
    }




    //--------------------------------------------           -------------------------------------------------------------------
    return (
        <div className="view-list">
            <div className="left">
            
                <div className="heading">
                    <h3>Viewing List</h3>
                    <h3>for {id}</h3>
                </div>
                <hr/>
                <div className="list-set">
                    <h6>List:</h6>
                    <h6 >{lists[id]? 'exists' : 'not made'}</h6>
                </div>
                <h1>{lists[id]? lists[id].length : 0} items</h1>
                <hr/>
                <button className="budget-info" onClick={()=> history.push(`/budget/${id}`)} onMouseEnter={handleBudgetInfoHover} onMouseLeave={handleBudgetInfoHoverLeave}>
                    {
                        budgetInfoHoverText === 'make'? 
                            <h5 >Set Budget</h5> 
                        : budgetInfoHoverText === 'edit'? 
                            <h5 >Edit Budget</h5> 
                        :
                        <>
                            <h5 >Budget</h5>
                            <h5 >{budgets[id]? budgets[id] : 'not set'}</h5>
                        </>
                    }
                </button>
                <div className="total-info">
                    <h5>Total</h5>
                    <h5>{total}</h5>
                </div>
                <div className="budget-balance">
                    <h5>Budget Balance</h5>
                    <h5>{budgets[id] ? total - Number.parseInt(budgets[id]) : '⊘'}</h5>
                </div>
                <hr/>
                <div className="actions">
                    <button onClick={handleAmend}>{view === 'list'? 'Amend' : 'Save'}</button>
                    {isAmending? 
                    <button onClick={handleCancel}>{'Close'}</button>
                    :''
                    
                }

                </div>

            </div>
            <div className="right">
                <div className="make-list-outline col-sm-12 m-0 m-lg-5 m-md-1">
                {
                    view === 'list'?
                    <>
                    <div className="existing-list-heading">
                        <div className="heading">
                            <h3>{id}</h3>
                            <h3>List</h3>
                        </div>
                       
                        
                    </div>
                    <div className="existing-list">
                        {
                            lists[id]? lists[id].map(item => (
                                <div className="list-item">
                                    <h4>{item.name}</h4>
                                    <h4>$2.00</h4>
                                </div>
                            ))
                            : 
                            <div className="list-empty">
                                <h3>List was not made</h3>
                                <img src={empty} alt=""/>
                            </div>
                        }
                    </div>
                    <div className="totals">
                        <h3>Total: ${total}.00</h3>
                    </div>
                    </>
                    :
                
                        <div className="make-list ">
                            <div className="budget-container">
                                {
                                    alert.show && <Alert {...alert} removeAlert={showAlert}/>
                                }
                                <div className="logo animate__animated animate__tada">
                                    <h1>Add items below</h1>
                                </div>
                            
                                
                                <hr/>
                                <form className="form-inline d-flex justify-content-around align-items-center">
                                    <div className="form-inline d-flex justify-content-around align-items-center">
                                        <input
                                            name="name" 
                                            type="text" 
                                            value={item.name}
                                            onChange={handleChange}
                                            className="my-input form-control"
                                            placeholder="E.g 6 pack soda"
                                        />
                                        <span>for</span>
                                        <input
                                            name="price" 
                                            type="number" 
                                            value={item.price}
                                            onChange={handleChange}
                                            className="my-input form-control"
                                            placeholder="$"
                                        />

                                    </div>
                                    <button onClick={handleSubmit} type="submit" className="h-100">{isEditing? 'Save changes' : 'Add item'}</button>
                                </form>
                                <hr/>
                                <div className="my-list">
                                    <List> 
                                        {
                                            list? list.map((grocery_item) => 
                                            (<ListItem
                                                {...grocery_item} 
                                                removeItem = {removeItem} 
                                                editItem = {editItem}
                                                forSave
                                            />))
                                            : ''
                                        }

                                    </List>
                                </div>
                                <div className="money">
                                    
                                </div>
                            </div>


                            <div className="d-flex clear-list justify-content-center">
                                {
                                    list.length > 0? 
                                    <>
                                    <button onClick={clearList} className="btn-clear ">clear items</button>
                                    <button onClick={handleSave} className="btn-save ">Save List</button>
                                    </>
                                    :
                                    
                                    <h6>You do not have any items yet</h6>
                                }
                            </div>
                            </div>
                }
                </div>
        
            

            </div>
    </div>
    )
}

export default ViewList
