import React, { useState, useEffect } from 'react';
import { Button } from './components/Button.js';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    
    //sets state of click to website on load as false, toggles true/false
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();}
        ,[]
    )

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/*Nav bar head*/}
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        UNIVERSE <i class="fab fa-acquisitions-incorporated"></i>
                    </Link>

                    {/*creates hamburger menu and sets to bars or x depending on state*/}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                    </div>
                    {/*Sets menu links*/}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                                News
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/constellations' className='nav-links' onClick={closeMobileMenu}>
                                Constellations
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/astrology' className='nav-links' onClick={closeMobileMenu}>
                                Astrology
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign up for our newsletter
                            </Link>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}

                </div>

            </nav>
        </>
    );
}

export default Navbar;