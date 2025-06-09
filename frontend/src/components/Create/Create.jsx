import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import './Create.css';
import api from '../../api/data';

/**
 * Create component – form for creating a new note with title, text, color, and category.
 *
 * @component
 * @returns {JSX.Element}
 */
function Create() {
    const navigate = useNavigate();
    const [tytul, setTytul] = useState('');
    const [tekst, setTekst] = useState('');
    const [kolor, setKolor] = useState('#ffffff');
    const [kategoria, setKategoria] = useState('');
    const [error, setError] = useState('');

    /**
     * Handles color change for note title background.
     * @param {string} newColor
     */
    const handleColorChange = (newColor) => {
        setKolor(newColor);
    };

    /**
     * Handles form submission, validates inputs and sends note to API.
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!tytul.trim() || !tekst.trim() || !kategoria.trim()) {
            setError('Uzupełnij tytuł, treść i kategorię.');
            return;
        }

        setError('');
        api.note.addNote(1, tytul, tekst, kolor, kategoria);
        navigate('/mainpage');
    };

    return (
        <div className="create-container">
            <div className="navbar-create">
                <div className="logo-land-page-create">
                    <FontAwesomeIcon className='ikona-land' icon={faNoteSticky} /> 
                    <p>noteIT</p>
                </div>
                <div className="user-name">example@gmail.com</div>
            </div>
            
            <form className="main-form" onSubmit={handleSubmit}>
                <div className="tekst-box">
                    <textarea 
                        placeholder="Wpisz notatkę..."
                        value={tekst}
                        onChange={(e) => setTekst(e.target.value)}
                    ></textarea>
                </div>

                <div className="right-panel">
                    <textarea 
                        className="title-input" 
                        style={{ backgroundColor: kolor }}
                        placeholder="Title" 
                        value={tytul}
                        onChange={(e) => setTytul(e.target.value)}
                    />

                    <div className="color-picker">
                        {['#ff0000', '#00ff00', '#ffff00'].map((color) => (
                            <div 
                                key={color} 
                                className={`color-circle ${kolor === color ? 'selected' : ''}`} 
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorChange(color)}
                            ></div>
                        ))}
                    </div>

                    <select 
                        className="category-select" 
                        value={kategoria}
                        onChange={(e) => setKategoria(e.target.value)}
                    >
                        <option value="">Wybierz kategorię</option>
                        <option value="Work">Work</option>
                        <option value="Studies">Studies</option>
                        <option value="Others">Others</option>
                    </select>

                    {error && <p className="form-error">{error}</p>}

                    <button type="submit" className="submit-button">Dodaj</button>
                </div>
            </form>
        </div>
    );
}

export default Create;
