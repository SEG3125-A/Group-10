import React from "react";
import { translate } from "../I18n";

function Popup({ isOpen, onClose, professional }) {
  if (!isOpen) return null;

  const url = window.location.href;
  const isFr = url.includes("/fr");
  let lang = 'en'
  if (isFr) {
    lang = 'fr'
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{professional.name}</h2>
        <p>{translate("qualifications", lang)}: {professional.qualifications}</p>
        <p>{translate("servicesOffered", lang)}: {professional.services.join(", ")}</p>
        <button onClick={onClose}>{translate("close", lang)}</button>
      </div>
    </div>
  );
}

export default Popup;
