import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import './Create.css';

function Create() {
    const navigate = useNavigate();
    const [tytul, setTytul] = useState('');
    const [tekst, setTekst] = useState('');
    const [kolor, setKolor] = useState('#ffffff');
    const [kategoria, setKategoria] = useState('');

    const handleColorChange = (newColor) => {
        setKolor(newColor);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ tytul, tekst, kolor, kategoria });
    };

    return (
        <div className="create-container">
            <div className="navbar-create">
                    <div className="logo-land-page-create">
                        <FontAwesomeIcon className='ikona-land' icon={faNoteSticky} /> 
                        <p>noteIT</p>
                    </div>
                <div className="user-name">KAMIL123</div>
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
                    <input 
                        className="title-input" 
                        style={{ backgroundColor: kolor }}
                        type="text" 
                        placeholder="Tytuł notatki" 
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
                        <option value="Praca">Praca</option>
                        <option value="Studia">Studia</option>
                        <option value="Inne">Inne</option>
                    </select>

                    <button type="submit" className="submit-button">Dodaj</button>
                </div>
            </form>
        </div>
    );
}

export default Create;
