import React from "react";

function Popup({ isOpen, onClose, professional }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{professional.name}</h2>
        <p>Qualification: {professional.qualifications}</p>
        <p>Services Offered: {professional.services.join(", ")}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
