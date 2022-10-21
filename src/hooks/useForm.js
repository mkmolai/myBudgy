import React, { useState } from 'react'

const useForm = () => {

    const [item, setItem] = useState({
        name: '',
        price: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setItem({
            ...item,
            [name]: value
        })

    }
    
    return {item, handleChange, setItem}
}

export default useForm
