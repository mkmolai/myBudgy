import React, { useRef, useState } from 'react'
import '../style/login/login.css';
import 'animate.css';
import MB from '../assets/MB.png';
import gsap, {TweenMax, Power3,  } from 'gsap';
import {useHistory} from 'react-router-dom';

const Login = () => {


    let history = useHistory();
    
    
    let butt = React.createRef();
    // let butt = useRef('')

    const [rubber, setRubber] = useState('animate__rubberBand');
    const [pass, setPass] = useState(false);

    //Selecting DOM element ------- Taglinr

    let tagline = useRef();

    
    const getWelcome = () => {
        TweenMax.from('#shake-target', 0.5, {opacity: 0, ease: Power3.easeIn,  delay: 0.6});
        return 'Welcome'
    }


    //-------------------------- --------------------- ----------------------- -------------------------

    const handleLogin = (e) => {
        e.preventDefault();

        const rubberband = 'animate__rubberBand';
        // const mynode = butt.current;
        // mynode.classList.add(rubberband);
        setRubber('animate__rubberBand');
        history.push('/todo');
        //document.getElementById('shake-target').classList.add(rubberband);
    }

    return (
        <>
            <div className="login">

                <div className="login-logo d-flex flex-column align-items-center mb-5">
                    <img src={MB} alt=""/>
                    <h3 ref={(el)=> tagline=el} className={`tagline text-light animate__animated ${rubber}`} id="shake-target">
                        {pass? 'Planning that saves you loads of dollars' : getWelcome()}
                    </h3>
                </div>

                <div className="login-form">
                    <form className="px-3 py-5" onSubmit="">

                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">Nickname</label>
                            <input 
                                name="nickname"
                                type="text" 
                                className="form-control"
                                
                                placeholder="Enter registered nickname"
                            />
                        </div>

                        {/* field two */}
                        <div className="mb-3">
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
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Re-enter password</label>
                            <input 
                                name="password2"
                                type="password" 
                                className="form-control"
                                
                                placeholder="Re-enter your password"
                                onChange=""
                            />
                        </div>
                        
                        <button ref={el => butt=el} type="submit" className="py-2" onClick={handleLogin}>Login</button>
                        <div className="text-light">
                            <small>Don't have an account?</small>
                            <a href="/register" className="text-warning"> Register</a>
                            <small> instead</small>

                        </div>
                        
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login
