import  React from 'react';
import { Link } from 'react-router-dom'

function Header () {
    return (
        <header style = {headerStyle}>
            <h1>To-Do List App</h1>
            <Link style = {linkStyle} to="/To-Do-List-App">Home</Link> | <Link style={linkStyle} to="/To-Do-List-App/about">About</Link>
        </header>
    );
}


// Styles
const headerStyle = {
    background : '#333',
    color : '#fff',
    textAlign : 'center',
    padding : '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;