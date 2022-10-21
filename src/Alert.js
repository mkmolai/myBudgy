import React, { useEffect } from 'react';
import { GrAlert } from "react-icons/gr";

const Alert = ({show, msg, type, removeAlert}) => {

    useEffect(() => {
        
        const timeout = setTimeout(()=> {
            removeAlert();
        }, 3000);

        return ()=> clearTimeout(timeout);

    }, [])

    return (
        <div className={`bud-alert-${type} d-flex justify-content-center align-items-center bg-warning mb-3`}>
            <GrAlert/>
            <h5 className="ml-3 mt-1">{msg}</h5>
        </div>
    )
}

export default Alert
