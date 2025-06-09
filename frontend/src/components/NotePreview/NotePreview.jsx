import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/data';
import './NotePreview.css';

/**
 * NoteDetails component – displays detailed information about a selected note.
 * It fetches note data based on the note ID from the URL parameters and
 * renders a styled preview with title, description, and category.
 *
 * @component
 * @returns {JSX.Element} A preview of the selected note.
 */
function NoteDetails() {
    const { noteId } = useParams(); // from URL

    const navigate = useNavigate(); // programmatic navigation

    /** State to store fetched note data. */
    const [note, setNote] = useState(null);

    useEffect(() => {
        async function fetchNote() {
            try {
                const fetchedNote = await api.note.getNote(noteId);
                setNote(fetchedNote);
            } catch (error) {
                console.error('Błąd ładowania notatki:', error);
            }
        }

        fetchNote();
    }, [noteId]);

    /** Navigates the user back to the main page. */
    const handleBackClick = () => {
        navigate('/mainpage');
    };

    if (!note) {
        return <p>Loading...</p>;
    }

    return (
        <div className="note-preview-wrapper">
            <div className="note-preview-container" style={{ backgroundColor: note.color }}>
                <h1 className="note-title">{note.title}</h1>
                <p className="note-description">{note.description}</p>
                <p className="note-category-show">
                    <strong>Kategoria:</strong> {note.category}
                </p>
            </div>

            <button className="back-button" onClick={handleBackClick}>
                Back to home page
            </button>
        </div>
    );
}

export default NoteDetails;
