import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Note.css';

/**
 * Note component – displays a single note card with title and category.
 * Navigates to the note preview page when clicked.
 *
 * @component
 * @param {Object} props
 * @param {number|string} props.id - Unique identifier of the note.
 * @param {string} props.title - Title of the note.
 * @param {string} props.color - Background color of the note.
 * @param {string} props.category - Category of the note.
 * @returns {JSX.Element}
 */
function Note({ id, title, color, category }) {
    const navigate = useNavigate();

    /**
     * Handles clicking on the note and navigates to its preview page.
     */
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
