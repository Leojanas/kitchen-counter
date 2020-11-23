import React from 'react';
import Navigation from '../Navigation/navigation';
import './header.css'

function Header(props) {
    return (
        <header>
            <h1>Kitchen Counter</h1>
            <Navigation />
        </header>
    )
}

export default Header