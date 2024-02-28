import React from 'react';
import './MainContent.css';
import first from '../Assets/Images/Army-Trainer-Unisex-Sneakers.avif';

function MainContent() {
  return (
    <div className="MainContent">
      <div>
        <h2>Trending Now</h2>
        <div>
          <img src={first} alt="sneeker" className="imgMain" />
          {/* <div style={{ display: "flex" }}> */}
          <div>
            <p>Army-Trainer-Unisex-Sneakers</p>
            <p>Rs - 6544</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent