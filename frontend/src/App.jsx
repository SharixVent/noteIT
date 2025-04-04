import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Create from './components/Create/Create.jsx';

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
            </Routes>
        </Router>
    );
}

export default App;