import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import './Login.css';

function Login() {

    return (
        <>
            <div className='login-main'>

                <div className="login-cork-board">    

                    <div className="login-left-book">
                        <div className="book"></div>
                    </div>

                    <div className="login-container">
                        <div className="login-logo">
                            <FontAwesomeIcon className='ikona-login' icon={faNoteSticky} /> 
                            <p>noteIT</p>
                        </div>

                        <form action="" className='login-form'>
                            <label htmlFor="" className="">Login</label>
                            <input type="text" placeholder='Login ..'/>
                            <label htmlFor="" className="">Password</label>
                            <input type="text" placeholder='Password ..'/>
                            <input type="submit" value={"Login"}/>
                        </form>

                    </div>

                    <div className="note-login">
                        <div className="login-note-pin"></div>
                        <div className="login-note-pinleg"></div>
                        <p>Never give your password to anyone!</p>
                    </div>

                    <div className="note-login-shadow"></div>
                </div>
            </div>
        </>
    )
} 
export default Login; 