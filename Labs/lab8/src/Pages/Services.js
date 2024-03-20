import NavBar from "../Components/NavBar";
import { Button, Card } from "@mui/material";
import "../globalstyles.css";
import { translate } from "../I18n";


function Services() {

    const url = window.location.href;
    const isFr = url.includes("/fr");
    let lang = 'en'
    if (isFr) {
      lang = 'fr'
    }

    let SERVICES = [
    {
        name: translate("haircut", lang),
        price: 40,
        image: "haircut.jpeg",
    },
    {
        name: translate("hairColoring", lang),
        price: 60,
        image: "hair-coloring.jpeg",
    },
    {
        name: translate("manicure", lang),
        price: 30,
        image: "manicure.jpeg",
    },
    {
        name: translate("pedicure", lang),
        price: 40,
        image: "pedicure.jpeg",
    },
    {
        name: translate("facial", lang),
        price: 50,
        image: "facial.jpeg",
    },
    {
        name: translate("massage", lang),
        price: 80,
        image: "massage.jpeg",
    },
    {
        name: translate("makeup", lang),
        price: 60,
        image: "makeup.jpeg",
    },
    {
        name: translate("waxing", lang),
        price: 40,
        image: "waxing.jpeg",
    },
    {
        name: translate("beardTrim", lang),
        price: 20,
        image: "beard-trim.jpeg",
    },
    ];

  return (
    <div>
      <NavBar />
      {/* Title */}
      <div style={{ fontFamily: "NonSans", fontSize: 40, margin: 20 }}>
        {translate("services", lang)}
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
                style={{ width: "100%", height: 230, borderRadius: 20 }}
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
