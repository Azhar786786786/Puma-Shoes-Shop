import React from 'react';
import './Header.css';
import PumaLogo from '../Assets/Images/puma-logo.png';

function Header() {
  return (
    <div className="header">
      <div>
        <img src={PumaLogo} alt="log image" className="img" />
      </div>
      <div className="listItem">
        <ul>
          <li>New</li>
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Sports</li>
        </ul>
      </div>
    </div>
  )
}

export default Header