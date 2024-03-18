import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Popup from "../Components/Popup";
import "../styles/professionals.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "@mui/material";

function Professionals() {
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  const professionals = [
    {
      id: 1,
      name: "John Doe",
      qualifications: "MD Dermatology",
      services: ["Facial Treatments", "Botox", "Dermal Fillers"],
      image: "person1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      qualifications: "Licensed Cosmetologist",
      services: ["Chemical Peels", "Microdermabrasion", "Laser Hair Removal"],
      image: "person3.jpeg",
    },
    {
      name: "Emily Johnson",
      qualifications: "Licensed Cosmetologist",
      services: ["Facial Treatments", "Botox", "Dermal Fillers"],
      image: "person1.png",
    },
    {
      name: "Maria Garcia",
      qualifications: "Licensed Cosmetologist",
      services: ["Facial Treatments", "Botox", "Dermal Fillers"],
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
    if (!service) {
      history("/services");
    }
  }, [history]);

  const service = new URLSearchParams(window.location.search).get("service");
  const handleSelectProfessional = (service, professionalName) => {
    window.location.href = `/checkout?service=${service}&professional=${professionalName}`;
  };

  return (
    <div>
      <NavBar />
      <div style={{ fontFamily: "NonSans", fontSize: 40, margin: 20 }}>
        Our Professionals
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
                Select
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
