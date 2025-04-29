import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Create from './components/Create/Create.jsx';
import NotePrev from './components/NotesPreview/NotesPreview.jsx'
import NoteDetails from './components/NotePreview/NotePreview.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/create" element={<Create />} />
                <Route path='profile' element={<MainPage/>}/>
                <Route path='/noteprev' element={<NotePrev/>}/>
                <Route path="/notespreview/:noteId" element={<NoteDetails />} />
            </Routes>
        </Router>
    );
}

export default App;