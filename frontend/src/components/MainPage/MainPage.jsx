    import React, { useEffect, useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { faNoteSticky, faUser} from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import api from '../../api/data'; 
    import Note from '../Note/Note';
    import './MainPage.css';

    function MainPage() {
                                //studies !!!!!!!
        const categories = ["All", "Studies", "Work", "Others"];
        const [selectedCategory, setSelectedCategory] = useState("All");
        const navigate = useNavigate();
        const [notes, setNotes] = useState([]);

        const handleSelect = (category) => {
            setSelectedCategory(category);
        };

        const [loading, setLoading] = useState(false);

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
        
        useEffect(() => {
            fetchNotes(selectedCategory); // run when category changes
        }, [selectedCategory]);
        
        useEffect(() => {
            fetchNotes(selectedCategory); // run once on mount
        }, []);

        const handleProfileClick = () => {
            // Navigate to the profile page
            navigate('/profile');
        };

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