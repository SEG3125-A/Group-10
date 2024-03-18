import React from "react";
import { Button, Card } from "@mui/material";

function Home() {
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
          <h1 className=" first-line">Wellness, delivered!</h1>
          <h3 className=" paragraph">
            CosmetiGo connects you with top on-demand massage, skincare, hair,
            and beauty service professionals. Taking care of yourself has never
            been this easy and convenient.
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
              window.location.href = "/services";
            }}
          >
            Get Started
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
