import React, { useState, useEffect } from 'react';
import '../style/todo/todo.css';
import 'animate.css'
import List from '../List';
import ListItem from '../ListItem';
import Alert from '../Alert';
import Logo from '../assets/Logo@2x.png';
import useForm from '../hooks/useForm';
 
const ToDo = () => {

    const {item, setItem, handleChange} = useForm();
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        msg: '', 
        type: 'error',
    });

    const [summary, setSummary] = useState({
        completed: 0,
        still_need: 0,
        total_products: 0,
    })

    //how is isEditting triggered?

    const handleSubmit = (e) => {
        e.preventDefault()
        //diplay alert if field is empty
        if(!item.name || !item.price){
            showAlert(true, 'Please complete your input', 'error')
        }
        else if(item.name && isEditing)
        {
            const newList = list.map(list_item => {
                if(list_item.id === editID)
                {
                    // list_item.title = item
                    // return {list_item}
                    return {...list_item, name: item.name, price: item.price}
                }
                return list_item
            })


            setList([...newList])
            setItem({name: '', price: ''});
            showAlert(true,'You have successfully edited an item', 'success')
        }
        else{
            const newItem = {id: new Date().getTime().toString(), name: item.name, price: item.price, completed: false};
            setList([...list, newItem]);
            showAlert(true, `Successfully added ${item.name} to your list`, 'success')
            setItem({name: '', price: ''});
            increaseNeed();
                }
        //
    }

    const increaseNeed = () => {
        console.log('Increasing the need');
        const increased_new_need = summary.still_need + 1;
        setSummary({...summary, still_need: increased_new_need})

    }

    //Hear updating same state in same function call gave me an issue
    // const decreaseNeed = () => {
    //     console.log('Decreasing the need');
    //     const decreased_new_need = summary.still_need - 1;
    //     setSummary({...summary, still_need: decreased_new_need})
    // }

    const update = () => {
        if(summary.still_need>0)
        {
            console.log('Updating completed');
            const updated_number = summary.completed + 1;
            const decreased_new_need = summary.still_need - 1;
            setSummary({...summary, still_need: decreased_new_need, completed: updated_number})

        }
        else
        {
            return ''
        }
    }


    const showAlert = (show = false, msg = '', type = '') => {
        setAlert({show, msg, type});
    }

    const removeItem = (id) => {
        showAlert(true, 'Item was removed from your list', 'error');
        const newList = list.filter(item => item.id!== id);
        setList([...newList])
    }

    const clearList = () => {
        showAlert(true, 'Emptied List', 'error')
        setList([])
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

    const completeStyle = {
        color: 'rgb(132, 0, 255)',
        textDecoration: 'line-through',
    }

    const completedItem = (id) => {
        const newList = list.map(list_item => {
            if(list_item.id === id)
            {
                //decreaseNeed();
                update();
                return {...list_item, completed: true}
            }
            return list_item
        })

        setList([...newList])
    }

    const handleReset = () => {
        setList([])
        setSummary({
            completed: 0,
            still_need: 0,
            total_products: 0,
        })
    }

    const [total, setTotal] = useState()

    useEffect(() => {

        const calculateTotal = () => {
            const monies = list.map(item => Number.parseInt(item.price));
            console.log('MONIES:' + monies)
            let sum = 0;
            for (let i = 0; i < monies.length; i++) {
                sum += monies[i]   
            }
            setTotal(sum)
        }
        calculateTotal()
    }, [list])

    const rubberband = 'animate__rubberBand';

    return (
        <>
        {/* Summary side  ---=-----------------=----------------------=---------------------------  */}

        

        <div className="todo">


            <div className="summary">
            {/* <div className="summary d-none col-lg-3 col-md-7 col-sm-11 m-md-5 m-2"> */}

                <h1 className="">GROCERY SUMMARY</h1>
                <hr/>
                <div className="d-flex summary-items justify-content-center">
                    <div className="completed">
                        <h1>Completed</h1>
                        <h2>{summary.completed}</h2>
                    </div>
                    <div className="pending">
                        <h1>Still Need</h1>
                        <h2>{summary.still_need}</h2>
                    </div>
                    <div className="total">
                        <h1>Total</h1>
                        <h2>0</h2>
                    </div>
                </div>
                <hr/>
                <div className="total-products">
                    <h1>No. of products</h1>
                    <h2>{list.length}</h2>
                </div>

                <button onClick={handleReset} className="w-100">Reset</button>

            </div>



        <div className="make-list-outline col-lg-7 col-md-9 col-sm-12 m-0 m-lg-5 m-md-1">
            <div className="make-list ">
                <div className="budget-container">
                    {
                        alert.show && <Alert {...alert} removeAlert={showAlert}/>
                    }
                    <div className="logo animate__animated animate__tada">
                        {/* <img src={Logo} alt="mYbUDGY"/> */}
                        <h1>Make quick list.</h1>
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
                                list.map((grocery_item) => 
                                <ListItem
                                    {...grocery_item} 
                                    removeItem = {removeItem} 
                                    editItem = {editItem} 
                                    completedItem={completedItem}
                                    completeStyle ={completeStyle}
                                />)
                            }

                        </List>
                    </div>
                    <div className="money">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Current Total:</span>
                            <span>$({total})</span>
                        </div>
                        {/* <div className="balance d-flex justify-content-between align-items-center">
                            <span>Budget Balance:</span>
                            <span>$(0.00)</span>
                        </div> */}
                    </div>
                </div>


                <div className="d-flex clear-list justify-content-center">
                    {
                        list.length > 0? 

                        <button onClick={clearList} className="btn-clear ">clear items</button>
                        :
                        
                        <h6>You do not have any items yet</h6>
                    }
                </div>
                </div>
            </div>
        </div>
        {/* <h4 className="text-light">Designed by Moreme</h4> */}
        </>
    )
}

export default ToDo
