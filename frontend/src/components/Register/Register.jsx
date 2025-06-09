import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import './Register.css';

/**
 * Register component – handles new user registration with validation.
 *
 * @component
 * @returns {JSX.Element}
 */
function Register() {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    /**
     * Handles form submission and validates input values.
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!login || !email || !password || !repeatPassword) {
            setError('Uzupełnij wszystkie pola.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Podaj poprawny adres e-mail.');
            return;
        }

        if (password !== repeatPassword) {
            setError('Hasła się nie zgadzają.');
            return;
        }

        setError('');

        // ✅ Tutaj można wysłać dane do API (np. registerUser)
        console.log('Registering user:', { login, email, password });

        // Możesz też przekierować do loginu po rejestracji
        // navigate('/login');
    };

    return (
        <div className="register-main">
            <div className="register-cork-board">
                <div className="register-left-book">
                    <div className="book"></div>
                </div>

                <div className="register-container">
                    <div className="register-logo">
                        <FontAwesomeIcon className='ikona-register' icon={faNoteSticky} />
                        <p>noteIT</p>
                    </div>

                    <form className='register-form' onSubmit={handleSubmit}>
                        <label>Login</label>
                        <input
                            type="text"
                            placeholder="Login .."
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Email .."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Password .."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Repeat Password</label>
                        <input
                            type="password"
                            placeholder="Repeat Password .."
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />

                        {error && <p className="register-error">{error}</p>}

                        <input type="submit" value="Register" />
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
    );
}

export default Register;
