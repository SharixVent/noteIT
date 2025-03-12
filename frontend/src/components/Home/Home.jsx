import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky, faSquareUpRight, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import "./Home.css"


function Home() {
    const navigate = useNavigate();

    return (
      <>
        <nav>
            <button className='animated' onClick={() => navigate('/register')}>Register<FontAwesomeIcon icon={faSquareUpRight} /></button>
            <div className="logo">
                <FontAwesomeIcon className='ikona' icon={faNoteSticky} /> 
                <p>noteIT</p>
            </div>
            <button className='animated' onClick={() => navigate('/login')}><FontAwesomeIcon icon={faUser} />Login</button>          
        </nav>

        <main>
            <div className="container">
                <div className="note note-left">
                    <p>Write, save, go—effortlessly!</p>
                </div>
                <div className="shadow-left note-left"></div>

                <div className="note note-left-down"></div>
                <div className="shadow-down note-left-down"></div>

                <p>Your Thoughts, Your Way – Perfectly Organized.</p>

                <div className="note note-right">
                    <p>Never miss a moment, note it now!</p>
                </div>
                <div className="shadow-right note-right"></div>

                <div className="categories">
                    <span>Categories</span>
                    <span><FontAwesomeIcon className='icon-cat' icon={faCaretDown} />Studies</span>
                    <span><FontAwesomeIcon className='icon-cat' icon={faCaretDown} />Work</span>
                </div>

            </div>
        </main>
      </>
    )
  }
  
export default Home;