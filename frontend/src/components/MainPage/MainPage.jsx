import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky, faUser} from '@fortawesome/free-solid-svg-icons'
import './MainPage.css';

function MainPage()  {
    const navigate = useNavigate();

    return <>
        <div className="navbar-mp">
            <div className="logo-mp">
                <FontAwesomeIcon className='ikona-land' icon={faNoteSticky} /> 
                <p>noteIT</p>
            </div>
            <div className="profile-mp" id='profile-mp'><FontAwesomeIcon icon={faUser} />example@email.com</div>
        </div>
        <div className="main-mp">
            <div className="categories-mp">
                <span>Categories</span>
                <div className="container-cat-mp">
                    <input type="checkbox" name="" id=""></input>
                    <label htmlFor="">All</label>
                    <input type="checkbox" name="" id=""></input>
                    <label htmlFor="">Studies</label>
                    <input type="checkbox" name="" id=""></input>
                    <label htmlFor="">Work</label>
                    <input type="checkbox" name="" id=""></input>
                    <label htmlFor="">Others</label>
                </div>
                
            </div>
            <div className="container-mp">
                <div className="notes-container-mp">
                {/*Notatki tutaj*/}
                </div>
                <div className="cont-add-mp">
                    <div className="add-note-mp"></div>
                </div>
            </div>

        </div>
    </>

} export default MainPage;