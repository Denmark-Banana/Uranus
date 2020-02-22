import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <span>Cryptocurrency {new Date().getFullYear()} &copy;</span>
        </footer>
    );
}

export default Footer;