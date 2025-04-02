import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky, faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky, faUser } from '@fortawesome/free-solid-svg-icons';
import api from '../../api/data'; 
import Note from '../Note/Note';
import './MainPage.css';

function MainPage() {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Fetch notes for the test user with ID 1
        api.note.getUserNotes(1)
            .then((fetchedNotes) => setNotes(fetchedNotes))
            .catch((error) => console.error('Error fetching notes:', error));
    }, []);

    const handleProfileClick = () => {
        // Navigate to the profile page
        navigate('/profile');
    };

    const handleAddNoteClick = () => {
        // Navigate to the add note page
        // TODO: Add add note functionality it requires a json that look like this:
        // {"user_id": 1, "title": "My Second Note", "description": "This is the description of the note.", "color": "blue", "category": "Study"}
        navigate('/add-note');
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
                <div className="categories-mp">
                    <span>Categories</span>
                    <div className="container-cat-mp">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">All</label>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Studies</label>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Work</label>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Others</label>
                    </div>
                </div>
                <div className="container-mp">
                    <div className="notes-container-mp">
                        {/* Render notes here */}
                        {notes.map((note) => (
                            <Note
                                key={note.id}
                                title={note.title}
                                description={note.description}
                                color={note.color}
                                category={note.category}
                            />
                        ))}
                    </div>
                    <div className="cont-add-mp">
                        <div className="add-note-mp" onClick={handleAddNoteClick}>
                            <p>+ Add Note</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;