import React from 'react';
import './Note.css';

function Note({ title,  color, category }) {
    return (
        <div className="note" style={{ backgroundColor: color || '#f5f5f5' }}>
            <h3 className="note-title">{title}</h3>
            <span className="note-category">{category}</span>
        </div>
    );
}

export default Note;