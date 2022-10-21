import React, { useState } from 'react';
import MB2 from '../..//assets/MB2.png';

const BudgyNavBar = () => {

    const [active, setActive] = useState()
    
    return (
        <>
            <nav className="top-nav">
                <img src={MB2} alt="" className="nav-logo"/>
                <a className="" href="/todo">TODO</a>
                <a href="/budgets">Budgets</a>
                <a href="/lists">Lists</a>
                {/* <a href="/viewlist">View List</a> */}
                <a href="/view">Profile</a>
            </nav>
            <div className="top-lining"></div>
        </>
    )
}

export default BudgyNavBar
