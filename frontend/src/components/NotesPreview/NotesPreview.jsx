import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import './NotesPreview.css';
import api from '../../api/data';

/**
 * NotesPreview component – displays a grid of all notes for the user.
 * Fetches all user notes from the API and displays them in a styled layout.
 *
 * @component
 * @returns {JSX.Element} A page with a list of all notes for preview purposes.
 */
function NotesPreview() {
    /**
     * List of user notes fetched from the API.
     * @type {Array<Object>}
     */
    const [notes, setNotes] = useState([]);

    /**
     * Whether the notes are still being loaded.
     * @type {boolean}
     */
    const [loading, setLoading] = useState(true);

    /**
     * Fetches all notes for user ID 1 and updates state.
     * Runs once when the component mounts.
     * @returns {Promise<void>}
     */
    useEffect(() => {
        async function fetchNotes() {
            try {
                const fetchedNotes = await api.note.getUserNotes(1, "All");
                setNotes(fetchedNotes);
            } catch (error) {
                console.error('Błąd ładowania notatek:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchNotes();
    }, []);

    return (
        <div className="notes-preview-container-nprev">
            <div className="notes-preview-navbar-nprev">
                <div className="notes-preview-logo-nprev">
                    <FontAwesomeIcon className="notes-preview-icon-nprev" icon={faNoteSticky} />
                    <p>noteIT</p>
                </div>
                <div className="notes-preview-user-nprev">example@gmail.com</div>
            </div>

            {loading ? (
                <p className="notes-preview-loading-nprev">Ładowanie...</p>
            ) : (
                <div className="notes-preview-grid-nprev">
                    {notes.length === 0 ? (
                        <p className="notes-preview-empty-nprev">Brak notatek.</p>
                    ) : (
                        notes.map(note => (
                            <div
                                key={note.id}
                                className="notes-preview-card-nprev"
                                style={{ backgroundColor: note.color }}
                            >
                                <h3 className="notes-preview-title-nprev">{note.title}</h3>
                                <p className="notes-preview-description-nprev">{note.description}</p>
                                <span className="notes-preview-category-nprev">
                                    {note.category || "Brak kategorii"}
                                </span>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default NotesPreview;
