import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

/**
 * Login component – displays the login form with validation.
 *
 * @component
 * @returns {JSX.Element} A styled login form with validation and user feedback.
 */
function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    /**
     * Handles form submission and validates inputs.
     *
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!login.trim() || !password.trim()) {
            setError('Please fill in both login and password.');
            return;
        }

        setError('');
        // TODO: Add real authentication logic here
        console.log('Logging in with:', { login, password });
    };

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

                        <form className='login-form' onSubmit={handleSubmit}>
                            <label>Login</label>
                            <input
                                type="text"
                                placeholder="Login .."
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                            />
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password .."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <p className="login-error">{error}</p>}
                            <input type="submit" value="Login" />
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
    );
}

export default Login;
