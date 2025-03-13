import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky, faSquareUpRight, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import "./Home.css"


function Home() {
    const navigate = useNavigate();

    return (
      <>
        <div className='navbar-home'>
            <button className='animated-button-land' onClick={() => navigate('/register')}>Register<FontAwesomeIcon icon={faSquareUpRight} /></button>
            <div className="logo-land-page">
                <FontAwesomeIcon className='ikona-land' icon={faNoteSticky} /> 
                <p>noteIT</p>
            </div>
            <button className='animated-button-land' onClick={() => navigate('/login')}><FontAwesomeIcon icon={faUser} />Login</button>          
        </div>

        <div className='land-page'>
            <div className="container-land-page">
                <div className="note-land-page land-note-left">
                    <p>Write, save, go—effortlessly!</p>
                </div>
                <div className="land-shadow-left land-note-left"></div>

                <div className="note-land-page land-note-left-down"></div>
                <div className="land-shadow-down land-note-left-down"></div>

                <p>Your Thoughts, Your Way – Perfectly Organized.</p>

                <div className="note-land-page land-note-right">
                    <p>Never miss a moment, note it now!</p>
                </div>
                <div className="land-shadow-right land-note-right"></div>

                <div className="categories-land-page">
                    <span>Categories</span>
                    <span><FontAwesomeIcon className='icon-cat-page' icon={faCaretDown} />Studies</span>
                    <span><FontAwesomeIcon className='icon-cat-page' icon={faCaretDown} />Work</span>
                </div>

            </div>
        </div>
      </>
    )
  }
  
export default Home;