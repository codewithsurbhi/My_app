// src/components/Card.jsx
import React from 'react';
import './Card.css';
import ed from "../assets/education1.jpg";

const Card = ({ title, description, image, buttonText, onClick }) => {
  return (
    <div className="custom-card">
      {image && <img src={ed} alt={title} className="custom-card-image" />}
      <div className="custom-card-content">
        <h3 className="custom-card-title">{title}</h3>
        <p className="custom-card-description">{description}</p>
        {buttonText && (
          <button className="custom-card-button" onClick={onClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;