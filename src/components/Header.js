import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='headerMain'>
      <nav>
        <ul className="navList">
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
