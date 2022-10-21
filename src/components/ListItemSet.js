import React from 'react';
import { GrEdit } from "react-icons/gr";
import { GrTrash } from "react-icons/gr";

const ListItemSet = ({id, title}) => {

    
        return (
            <>
                <li className="d-flex justify-content-between list-item bg-light my-3">
                    <h6 className="pl-3">{title}</h6>
                    <div className="d-flex justify-content-around align-items-center">
                        <span className="">Now Have</span>
                    </div>
                </li>
            </>
        )
    
}

export default ListItemSet
