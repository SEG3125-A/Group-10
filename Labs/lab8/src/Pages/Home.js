import React from "react";
import { Button, Card } from "@mui/material";
import { translate } from "../I18n";

function Home() {

  const url = window.location.href;
  const isFr = url.includes("/fr");
  let lang = 'en'
  if (isFr) {
    lang = 'fr'
  }

  return (
    <div>
      <div className="home-container">
        <div className="welcome-text">
          <header
            className=""
            style={{
              fontFamily: "NonSans",
              fontSize: 80,
              textAlign: "center",
              bottom: "50%",
              position: "relative",
              top: 0,
              marginLeft: "20px",
              width: "100%",
            }}
          >
            CosmetiGo
          </header>
          <h1 className=" first-line">{translate("slogan", lang)}</h1>
          <h3 className=" paragraph">
            {translate("description", lang)}
          </h3>
          <Button
            style={{
              height: 40,
              backgroundColor: "white",
              color: "black",
              margin: 10,
              marginLeft: "auto",
              position: "absolute",
              bottom: "20%",
              left: "40%",
            }}
            onClick={() => {
              // Navigate to /services
              window.location.href = "/" + lang + "/services";
            }}
          >
            {translate("getStarted", lang)}
          </Button>
        </div>
        <div className="right-side">
          <div className="home-image-container">
            <img className="home-image" src={require(`../images/cover.webp`)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
