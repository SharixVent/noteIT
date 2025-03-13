import { useState } from 'react';
import './Login.css';

function Login() {

    return (
        <>
            <div className='login-main'>
                <div className="login-container">
                    <form action="" className='login-form'>
                        <label htmlFor="" className="">Login</label>
                        <input type="text" />
                        <label htmlFor="" className="">Password</label>
                        <input type="text" />
                        <input type="submit" value={"Login"}/>
                    </form>
                </div>

                <div className="login-cork-board">
                    
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