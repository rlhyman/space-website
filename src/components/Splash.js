import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Splash.css';

function Splash() {
    return (
        <div className= 'splash-container'>
            <video src='/videos/nasa-space.mp4' autoPlay loop muted />
            <h1>WELCOME TO YOUR UNIVERSE</h1>
            <p>SEE WHAT THE STARS HAVE IN STORE</p>
            <div className="splash-buttons">
                <Button className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>EXPLORE</Button>

                <Button className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'> 
                WATCH TRAILER <i class="far fa-play-circle"></i>
            
                </Button>
            </div>
        </div>
    )
}

export default Splash;
