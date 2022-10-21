import React from 'react'

const space = {
    marginLeft: "20px"
}

function ToDoItem(props){
        return(
            <div className="toDoItem">
                <input type="checkbox" 
                 checked={props.singleItem.completed}
                 onChange={()=> props.handleChange(props.singleItem.id)}/> 
                <span style={space}>{props.singleItem.text}</span>
        </div>
        )
    }

export default ToDoItem;