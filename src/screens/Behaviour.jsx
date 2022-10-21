import React from 'react';
import Logo from '../assets/LogoLogin.png';

const Behaviour = () => {
    return (
 
        <>
             <div className="behavior d-flex justify-content-center align-items-center mt-5 pt-5">
                <div className="behavior-control d-flex flex-column justify-content-center align-items-center">
                   
                    <div className="logo2 animate__animated animate__tada pb-5">
                            <img src={Logo} alt="mYbUDGY"/>
                    </div>

                    <div className="btn-group w-75 pb-5">
                        <button className="btn btn-light">SEE</button>
                        <button className="btn btn-light dropdown-toggle dropdown-toggle-split">
                            <span className="visually-hidden">January</span>
                        </button>
                        <select value="feb" className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                            
                            <option value="jan" className="dropdown-item">February</option>
                            <option value="feb" className="dropdown-item">February</option>
                            <option value="mar" className="dropdown-item">February</option>
                            
                        </select>
                    </div>

                    <h4>Showing January behavior</h4>

                </div>

                <div className="col-lg-3 col-md-7 col-sm-11 behavior-display m-md-5 m-2 py-5">
                    <div className="color-tag d-flex justify-content-center align-items-center">
                        <h2 className="pt-2">Slip</h2>
                    </div>
                    
                    <h1 className="pb-5">January Behavior</h1>
                    <ul className="summary-items">
                       <li>
                           <div className="d-flex justify-content-between align-items-center">
                               <h4>Allocated Budget</h4>
                               <h5>$5,000.00</h5>
                           </div>
                       </li>
                       <li>
                           <div className="d-flex justify-content-between align-items-center">
                               <h4 className="spent">Spent</h4>
                               <h5 className="spent-amount">$1,000.00</h5>
                           </div>
                       </li>
                       <hr/>
                       <li>
                           <div className="d-flex justify-content-between align-items-center">
                               <h4 className="current-stand">Current Stand</h4>
                               <h5>+ $4,000.00</h5>
                           </div>
                       </li>
                       
                    </ul>

                </div>

                </div>
        </>
    )
}

export default Behaviour
