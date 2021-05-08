import React from 'react'
import {Button} from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our free newsletter to get the universe delivered to your email
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe anytime.

                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email@Email.com" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
                        
        </div>
    )
}

export default Footer
