import React from 'react';
import { GrEdit } from "react-icons/gr";
import { GrTrash } from "react-icons/gr"; 

const ListItem = ({id, name, price , completed, forSave, removeItem, editItem, completeStyle, completedItem}) => {

     
        return (
            <>
                <li className="d-flex justify-content-between list-item">
                    <div>
                        <h5 style={completed? completeStyle : null}>1</h5>
                        <h5 style={completed? completeStyle : null}>{name}</h5>
                        <span style={completed? completeStyle : null}>- for</span>
                        <span style={completed? completeStyle : null}>${price}</span>
                    </div>
                    <ul className="list-item-actions">
                        {
                            forSave? ''
                            :
                            <li onClick={()=> {completedItem(id)}} disabled={completeStyle? false : true} >
                                <h5>Done</h5>
                            </li>
                        }
                        <li onClick={()=> {editItem(id)}} disabled={completeStyle? false : true} >
                            <GrEdit  className="icon-edit"/>
                        </li>
                        <li onClick={()=> {removeItem(id)}} disabled={completeStyle? false : true} >
                            <GrTrash  className="icon-delete"/>
                        </li>
                       
                    </ul>
                </li>
            </>
        )
    
}

export default ListItem
