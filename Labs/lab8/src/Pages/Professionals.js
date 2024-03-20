import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Popup from "../Components/Popup";
import "../styles/professionals.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "@mui/material";
import { translate } from "../I18n";

function Professionals() {
  const url = window.location.href;
  const isFr = url.includes("/fr");
  let lang = 'en'
  if (isFr) {
    lang = 'fr'
  }
  
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  let professionals = [
    {
      id: 1,
      name: "John Doe",
      qualifications: translate("mdDermatology", lang),
      services: [translate("facialTreatments", lang), translate("botox", lang), translate("dermalFillers", lang)],
      image: "person1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      qualifications: translate("licensedCosmetologist", lang),
      services: [translate("chemicalPeels", lang), translate("microdermabrasion", lang), translate("laserHairRemoval", lang)],
      image: "person3.jpeg",
    },
    {
      name: "Emily Johnson",
      qualifications: translate("licensedCosmetologist", lang),
      services: [translate("facialTreatments", lang), translate("botox", lang), translate("dermalFillers", lang)],
      image: "person1.png",
    },
    {
      name: "Maria Garcia",
      qualifications: translate("licensedCosmetologist", lang),
      services: [translate("facialTreatments", lang), translate("botox", lang), translate("dermalFillers", lang)],
      image: "person3.jpeg",
    },
  ];

  const handleProfessionalClick = (professional) => {
    setSelectedProfessional(professional);
  };

  const handleClosePopup = () => {
    setSelectedProfessional(null);
  };

  const history = useNavigate();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const service = queryParams.get("service");
    if(!service)  window.location.replace(`/${lang}/services`);
  }, [history]);

  const service = new URLSearchParams(window.location.search).get("service");
  const handleSelectProfessional = (service, professionalName) => {
    window.location.href = "/" + lang + `/checkout?service=${service}&professional=${professionalName}`;
  };

  return (
    <div>
      <NavBar />
      <div style={{ fontFamily: "NonSans", fontSize: 40, margin: 20 }}>
        {translate("ourProfessionals", lang)}
      </div>
      <div
        className="professional-cards"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {professionals.map((professional) => (
          <div
            key={professional.id}
            className="professional-card"
            onClick={() => handleProfessionalClick(professional)}
            style={{
              margin: 10,
              padding: 10,
              width: 300,
              height: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: 20,
              backgroundColor: "#e1f1fd",
              cursor: "pointer",
            }}
          >
            <img
              src={require(`../images/${professional.image}`)}
              style={{ width: "100%", height: 275, borderRadius: 20 }}
            />
            <div style={{ fontFamily: "NonSans", fontSize: 30, margin: 10 }}>
              {professional.name}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <div style={{ fontFamily: "NonSans", fontSize: 15, margin: 10 }}>
                {professional.qualifications}
              </div>

              <Button
                style={{
                  height: 40,
                  backgroundColor: "#4663ac",
                  color: "#e1f1fd",
                  margin: 10,
                  marginLeft: "auto",
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the click event from reaching the parent div
                  handleSelectProfessional(service, professional.name);
                }}
              >
                {translate("select", lang)}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Popup
        isOpen={!!selectedProfessional}
        onClose={handleClosePopup}
        professional={selectedProfessional || {}}
      />
    </div>
  );
}

export default Professionals;
