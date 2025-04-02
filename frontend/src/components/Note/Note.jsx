import React from 'react';
import './Note.css';

function Note({ title, description, color, category }) {
    return (
        <div className="note" style={{ backgroundColor: color || '#f5f5f5' }}>
            <h3 className="note-title">{title}</h3>
            <p className="note-description">{description}</p>
            <span className="note-category">{category}</span>
        </div>
    );
}

export default Note;