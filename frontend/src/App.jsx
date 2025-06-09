import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Create from './components/Create/Create.jsx';
import NotePrev from './components/NotesPreview/NotesPreview.jsx';
import NoteDetails from './components/NotePreview/NotePreview.jsx';

/**
 * App component – defines all application routes using React Router.
 * Handles navigation between pages like login, register, notes, and preview.
 *
 * @component
 * @returns {JSX.Element} The router-wrapped main component.
 */
function App() {
    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected/user routes */}
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/create" element={<Create />} />
                <Route path="/profile" element={<MainPage />} />

                {/* Notes */}
                <Route path="/noteprev" element={<NotePrev />} />
                <Route path="/notespreview/:noteId" element={<NoteDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
