import React from 'react';
import './MainContent.css';
//import first from '../Assets/Images/Army-Trainer-Unisex-Sneakers.avif';

function MainContent(props) {
  return (
    <div className="MainContent">
      <div>
        <h2>{props.heading}</h2>
        <div>
          <img src={props.imgdisp} alt="sneeker" className="imgMain" />
          {/* <div style={{ display: "flex" }}> */}
          <div>
            <p>{props.title}</p>
            <p>Rs - {props.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent