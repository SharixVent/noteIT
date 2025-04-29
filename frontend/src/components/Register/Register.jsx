import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import './Register.css'; // zmieniono z Login.css na Register.css

function Register() {
    return (
        <>
            <div className='register-main'>

                <div className="register-cork-board">    

                    <div className="register-left-book">
                        <div className="book"></div>
                    </div>

                    <div className="register-container">
                        <div className="register-logo">
                            <FontAwesomeIcon className='ikona-register' icon={faNoteSticky} /> 
                            <p>noteIT</p>
                        </div>
                        <form action="" className='register-form'>
                            <label htmlFor="">Login</label>
                            <input type="text" placeholder='Login ..'/>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Email ..'/>
                            <label htmlFor="">Password</label>
                            <input type="text" placeholder='Password ..'/>
                            <label htmlFor="">Repeat Password</label>
                            <input type="text" placeholder='Repeat Password ..'/>
                            <input type="submit" value={"Register"}/>
                        </form>

                    </div>

                    <div className="note-register">
                        <div className="register-note-pin"></div>
                        <div className="register-note-pinleg"></div>
                        <p>Use a strong password to protect your notes!</p>
                    </div>

                    <div className="note-register-shadow"></div>
                </div>
            </div>
        </>
    )
} 
export default Register;
