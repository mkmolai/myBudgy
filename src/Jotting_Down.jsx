import React, { useState } from 'react'

const useForm = () => {

    const [values, setValues] = useState({
        nickName: '',
        realName: '',
    });


    const handleChange = (e) => {
        e.preventDefault();

        const {value, name} = e.target;
        const new_values = {...values, name: value};
        setValues({
            ...values,
            [name]: value
        });
    }

    return {handleChange, values}
}

const validate = (values) => {

    const i = 0;
    let errors_array = [];
    let errors_object = {};
    //if statements for valication
    if(!values.nickName)
    {
        errors_object.nickName = 'You should enter your nickname here'
    }

    if(!values.realName)
    {
        errors_object.realName = 'You should enter your real name here'   
    }
    //also check id if the name of enter has a number or is more than 20 characters
    //For later: validate the input value at onChange level rather than on submit
    //For later: populating the data in a dropdowm menu
    
    //switch case statements
    switch(values){
        case !values.nickName: errors_object.nickName = 'Your should enter your nickname here';
        case !values.realName: errors_object.realName = 'You should enter your real name here'
    }

    return errors_object
        //i want to return an object that contains all the erriors
    
}

function Jotting_Down () {

    const [handleChange, values] = useForm()



    return (
        <div>
            {/* Not displying anything. This file is just for practice's sake.
                
                Tasks

                //1. Implement a custom useForm hook
        
        */}

        <form onSubmit = {handleSubmit}>

                <div>
                    <label htmlFor="nickname">Nickname:</label>
                    <input 
                        type="text"
                        placeholder="Enter your nickname here"
                        value={values.nickName}
                        onChange={handleChange}
                        name="nickname"
                        id=""
                    />
                </div>
                <input 
                    type="text"
                    placeholder="Enter your nickname here"
                    value={values.realName}
                    onChange={handleChange}
                    name="realname"
                    id=""
                />
        </form>   

        <h1>Your nickname is: {nickName}</h1>    
                
            





        </div>
    )
}

export default Jotting_Down
