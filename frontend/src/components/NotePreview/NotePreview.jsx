import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/data'; // Twój api plik

function NoteDetails() {
    const { noteId } = useParams();
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

    if (!note) {
        return <p>Ładowanie...</p>;
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <p><strong>Kategoria:</strong> {note.category}</p>
            <div 
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: note.color,
                    border: '2px solid black',
                    marginTop: 20
                }}
            ></div>
        </div>
    );
}

export default NoteDetails;
