import React, { useState } from 'react'
import useForm from './useForm';

const useMakeList = () => {

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

    const [total, setTotal] = useState()
    
    
    return {list, summary, handleSubmit, isEditing, removeItem, editItem,completedItem, completeStyle, total, setTotal, clearList, showAlert}
}

export default useMakeList
