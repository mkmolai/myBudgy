import React, { useState } from 'react';
import Logo from '../assets/LogoLogin.png';
import Me from '../assets/Me.jpg';

const Profile = () => {

    const [isEditing, setIsEditing] = useState(false);




    return (
        <>
             <div className="behavior d-flex justify-content-center align-items-center mt-5 pt-5">
                <div className="behavior-control d-flex flex-column justify-content-center align-items-center">
                   
                    <div className="logo2 animate__animated animate__tada pb-5">
                            <img src={Logo} alt="mYbUDGY"/>
                    </div>

                    <div className="btn-group w-75 pb-5">
                        <button className="btn btn-light">SHOWING PROFILE</button>
                    </div>

                    <h4>Showing your profile</h4>

                </div>

                <div className="col-lg-3 col-md-7 col-sm-11 profile-display m-md-5 m-2 pt-5">
                    <div className="color-tag d-flex justify-content-center align-items-center">
                        <h2 className="pt-2">PROF</h2>
                    </div>

                    {
                        isEditing? 
                            <div className="editing-box mb-5 mt-2">
                                <span htmlFor="firstname" className="text-primary ml-2">Editing ...</span>
                                <form action="" className="d-flex justify-content-around mt-2">
                                    <input 
                                        name="nickname"
                                        type="text" 
                                        className="form-control w-75"
                                        placeholder="Editing your ..."
                                    />
                                    <button className="">Save</button>
                                </form>
                            </div> 
                    
                    : //if not editing show the default display

                    <div className="editing-box-default mb-5 mt-2">
                        <span htmlFor="firstname" className="py-2 px-2 rounded ml-2">Click on the Edit links to make changes</span>
                    </div>
                    }
                    
                    <ul className="pb-5 info-list">
                        <li className="d-flex justify-content-around align-items-center">
                           
                                <div className="name">
                                    <h4>Moreme</h4>
                                    <h4 className="faint">Molai</h4>
                                    <a href="#">Edit</a>
                                </div>


                                <img src={Me}/>
                        </li>
                        <li className="mt-5">
                            <div className="d-flex justify-content-between px-4">
                                <div>
                                    <span>Gender</span>
                                    <h4>Male</h4>

                                </div>
                                <div>
                                    <span>Age</span>
                                    <h4>25</h4>
                                </div>
                            </div>
                        </li>
                        <hr/>
                        <li>
                            <div className="d-flex justify-content-between align-items-center px-4">
                                <div>
                                    <span>City</span>
                                    <h4>Harare</h4>
                                </div>
                                <a href="#">Edit</a>
                            </div>
                        </li>
                        <li>
                           
                        </li>
                    </ul>

                </div>

                </div>
        </>
    )
}

export default Profile
