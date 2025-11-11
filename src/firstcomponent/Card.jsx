// src/components/Card.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({
  title,
  description,
  image,
  buttonText,
  to,         // optional route, e.g. "/home"
  sectionId,  // optional same‑page id, e.g. "about"
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // 1. Navigate first (if a route is given)
    if (to) {
      navigate(to);
    }

    // 2. Scroll to a section (same page OR after navigation)
    if (sectionId) {
      // If we stay on the same page → scroll immediately
      if (!to) {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      // If we navigated → wait for the new page to render
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);   // 300 ms is safe for React‑Router re‑render
    }
  };

  return (
    <div className="custom-card">
      {image && <img src={image} alt={title} className="custom-card-image" />}
      <div className="custom-card-content">
        <h3 className="custom-card-title">{title}</h3>
        <p className="custom-card-description">{description}</p>

        {buttonText && (
          <button className="custom-card-button" onClick={handleClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;