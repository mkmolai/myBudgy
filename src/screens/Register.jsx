import React, { useRef, useState } from 'react'
import '../style/login/login.css';
import 'animate.css';
import register_logo from '../assets/LogoLogin.png';
import gsap, {TweenMax, Power3,  } from 'gsap';
import {useHistory} from 'react-router-dom';

const Register = () => {
    let history = useHistory();
    
    
    let butt = React.createRef();
    // let butt = useRef('')

    const [rubber, setRubber] = useState('');
    const [pass, setPass] = useState(false);

    //Selecting DOM element ------- Taglinr

    let tagline = useRef();

    
    const getWelcome = () => {
        TweenMax.from('#shake-target', 0.5, {opacity: 0, ease: Power3.easeIn,  delay: 0.6});
        return 'Welcome'
    }


    //-------------------------- --------------------- ----------------------- -------------------------

    const handleRegister = (e) => {
        e.preventDefault();

        const rubberband = 'animate__rubberBand';
        // const mynode = butt.current;
        // mynode.classList.add(rubberband);
        setRubber('animate__rubberBand');
        history.push('/shoppingtime');
        //document.getElementById('shake-target').classList.add(rubberband);
    }

    return (
        <>
        <div className="register w-50 d-flex flex-column align-items-center">

                <div className="register-logo d-flex flex-column align-items-center mb-5">
                    <img src={register_logo} alt=""/>
                    <h3 ref={(el)=> tagline=el} className={`tagline text-light animate__animated ${rubber}`} id="shake-target">
                        {pass? 'Planning that saves you loads of dollars' : getWelcome()}
                    </h3>
                </div>

                <div className="register-form w-75">

                    <form className="px-3 py-5 row" onSubmit="">

                        <div className="mb-3 col-md-6">
                            <label htmlFor="firstname" className="form-label">Nickname</label>
                            <input 
                                name="nickname"
                                type="text" 
                                className="form-control"
                                
                                placeholder="Enter registered nickname"
                            />
                        </div>

                        
                        {/* field two */}
                        <div className="mb-3 col-md-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input 
                                name="password"
                                type="password" 
                                className="form-control"
                                
                                placeholder="Enter your password"
                                onChange=""
                            />
                        </div>

                        {/* field two */}
                        <div className="mb-3 col-md-6">
                            <label  for="genderOptions" className="form-label">Gender</label>
                            <select id="genderOptions" className="form-select">
                                <option selected  >Male</option>
                                <option  >Female</option>
                            </select>
                        </div>


                        {/* field two */}
                        <div className="mb-3 col-md-6">
                            <label htmlFor="" className="form-label">Monthly Budget</label>
                            <input 
                                name="password"
                                type="password" 
                                className="form-control"
                                
                                placeholder="Enter your password"
                                onChange=""
                            />
                        </div>

                        {/* field two */}
                        <div className="mb-3 col-md-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input 
                                name="password"
                                type="password" 
                                className="form-control"
                                
                                placeholder="Enter your password"
                                onChange=""
                            />
                        </div>

                        {/* field three */}
                        <div className="mb-3 col-md-6">
                            <label htmlFor="" className="form-label">Re-enter password</label>
                            <input 
                                name="password2"
                                type="password" 
                                className="form-control"
                                
                                placeholder="Re-enter your password"
                                onChange=""
                            />
                        </div>
                        
                        <button ref={el => butt=el} type="submit" className="py-2" onClick={handleRegister}>Register</button>
                        <div className="text-light">
                            <small>Have an account?</small>
                            <a href="/" className="text-warning"> Login</a>
                            <small> instead</small>

                        </div>
                        
                    </form>
                </div>

            </div>
        </>
    )
}

export default Register
