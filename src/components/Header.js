import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='headerMain'>
      <nav>
        <ul className="navList">
          <li><a href="../images/Coles_Resume_NOV_8.pdf" target="_blank" rel="noopener noreferrer">Resume (pdf file)</a></li>
          <li><a href="https://www.linkedin.com/in/nicholas-gebhard/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/ColeGebhard" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
