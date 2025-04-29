import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Note.css';

function Note({ id, title, color, category }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/notespreview/${id}`);
    };

    return (
        <div 
            className="note" 
            style={{ backgroundColor: color || '#f5f5f5' }}
            onClick={handleClick}
        >
            <h3 className="note-title">{title}</h3>
            <span className="note-category">{category}</span>
        </div>
    );
}

export default Note;
