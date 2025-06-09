import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faNoteSticky, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../../api/data';
import Note from '../Note/Note';
import './MainPage.css';

/**
 * MainPage component – displays the main dashboard with user notes, category filters,
 * navigation to profile, and note creation functionality.
 *
 * @component
 * @returns {JSX.Element}
 */
function MainPage() {
    const categories = ["All", "Studies", "Work", "Others"];

    /** Currently selected note category. */
    const [selectedCategory, setSelectedCategory] = useState('All');

    const navigate = useNavigate();

    /** Array of user notes fetched from API. */
    const [notes, setNotes] = useState([]);

    /** Indicates if notes are being fetched. */
    const [loading, setLoading] = useState(false);

    /**
     * Handles selection of a category.
     * @param {string} category - The selected category name.
     */
    const handleSelect = (category) => {
        setSelectedCategory(category);
    };

    /**
     * Fetches user notes from the API for a given category.
     * @param {string} category - The category to filter notes by.
     * @returns {Promise<void>}
     */
    const fetchNotes = async (category) => {
        try {
            setLoading(true);
            const notesData = await api.note.getUserNotes(1, category);
            setNotes(notesData || []);
        } catch (err) {
            console.error("Failed to fetch notes:", err);
        } finally {
            setLoading(false);
        }
    };

    // Fetch notes when the selected category changes
    useEffect(() => {
        fetchNotes(selectedCategory);
    }, [selectedCategory]);

    // Fetch notes on component mount
    useEffect(() => {
        fetchNotes(selectedCategory);
    }, []);

    /** Navigates the user to their profile page. */
    const handleProfileClick = () => {
        navigate('/profile');
    };

    /** Navigates the user to the create note page. */
    const handleAddNoteClick = () => {
        navigate('/create');
    };

    return (
        <>
            <div className="navbar-mp">
                <div className="logo-mp">
                    <FontAwesomeIcon className="ikona-land" icon={faNoteSticky} />
                    <p>noteIT</p>
                </div>
                <div className="profile-mp" id="profile-mp" onClick={handleProfileClick}>
                    <FontAwesomeIcon icon={faUser} />
                    example@email.com
                </div>
            </div>
            <div className="main-mp">
                <div className="container-cat-button-mp">
                    <div className="categories-mp">
                        <span>Categories</span>
                        <div className="container-cat-mp">
                            {categories.map((cat) => {
                                const id = `category-${cat.toLowerCase()}`;
                                return (
                                    <React.Fragment key={cat}>
                                        <input
                                            type="checkbox"
                                            id={id}
                                            checked={selectedCategory === cat}
                                            onChange={() => handleSelect(cat)}
                                        />
                                        <label htmlFor={id}>{cat}</label>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>

                    <div className="cont-add-mp">
                        <div className="add-note-mp" onClick={handleAddNoteClick}>
                            <p>Create Note</p>
                        </div>
                    </div>
                </div>

                <div className="container-mp">
                    <div className="notes-container-mp">
                        {notes.map((note) => (
                            <Note
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                color={note.color}
                                category={note.category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
