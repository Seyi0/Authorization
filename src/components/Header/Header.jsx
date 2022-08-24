import React from 'react';
import './Header.css';



const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </nav>
        <div>
            <a href="https://twitter.com/seyi_makay">Twitter</a>
            <a href="https://www.instagram.com/seyi_makay/">Instagram</a>
        </div>
    </header>
   )

 }

export default Header