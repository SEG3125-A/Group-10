import NavBar from "../Components/NavBar";
import { Button, Card } from "@mui/material";
import "../globalstyles.css";

const SERVICES = [
  {
    name: "Haircut",
    price: 40,
    image: "haircut.jpeg",
  },
  {
    name: "Hair Coloring",
    price: 60,
    image: "hair-coloring.jpeg",
  },
  {
    name: "Manicure",
    price: 30,
    image: "manicure.jpeg",
  },
  {
    name: "Pedicure",
    price: 40,
    image: "pedicure.jpeg",
  },
  {
    name: "Facial",
    price: 50,
    image: "facial.jpeg",
  },
  {
    name: "Massage",
    price: 80,
    image: "massage.jpeg",
  },
  {
    name: "Makeup",
    price: 60,
    image: "makeup.jpeg",
  },
  {
    name: "Waxing",
    price: 40,
    image: "waxing.jpeg",
  },
  {
    name: "Beard Trim",
    price: 20,
    image: "beard-trim.jpeg",
  },
];

function Services() {

    const url = window.location.href;
    const isFr = url.includes("/fr");
    let lang = 'en'
    if (isFr) {
      lang = 'fr'
    }

  return (
    <div>
      <NavBar />
      {/* Title */}
      <div style={{ fontFamily: "NonSans", fontSize: 40, margin: 20 }}>
        Services
      </div>
      {/* Services */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {SERVICES.map((service, index) => {
          return (
            <Card
              onClick={() => {
                // Navigate to /professionals?service=service.name
                window.location.href = "/" + lang + `/professionals?service=${service.name}`;
              }}
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
                src={require(`../images/${service.image}`)}
                style={{ width: "100%", height: 275, borderRadius: 20 }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                }}
              >
                <div
                  style={{ fontFamily: "NonSans", fontSize: 30, margin: 10 }}
                >
                  {service.name}
                </div>
                <Button
                  style={{
                    height: 40,
                    backgroundColor: "#4663ac",
                    color: "#e1f1fd",
                    margin: 10,
                    marginLeft: "auto",
                  }}
                >
                  ${service.price}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
