import { Button } from "@mui/material";

function NavBar() {
  // Get the current URL
  const url = window.location.href;

  const isHome = url.endsWith("/");
  const isServices = url.includes("/services");
  const isProfessionals = url.includes("/professionals");
  const isCheckout = url.includes("/checkout");
  const isFr = url.includes("/fr");
  let lang = 'en'
  if (isFr) {
    lang = 'fr'
  }

  const enableHome = true;
  const enableServices = true;
  const enableProfessionals = isProfessionals || isCheckout;
  const enableCheckout = isCheckout;

  return (
    <div style={{ width: "100%", height: 60, backgroundColor: "#e1f1fd" }}>
      <div
        style={{
          position: "absolute",
          height: 60,
          width: "100%",
          top: 0,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ fontFamily: "NonSans", fontSize: 30, margin: 10 }}>
          CosmetiGo
        </div>
        {/** Header */}
        <Button
          style={{
            height: 40,
            backgroundColor: "white",
            color: enableHome ? "black" : "grey",
            margin: 10,
            marginLeft: "auto",
          }}
          disabled={!enableHome}
          onClick={() => {
            lang = lang === 'en' ? 'fr' : 'en';
            // change the language
            window.location.href = window.location.href.replace(/\/(en|fr)/, `/${lang}`);
          }}
        >
          Lang
        </Button>
        {/** Header */}
        <Button
          style={{
            height: 40,
            backgroundColor: "white",
            color: enableHome ? "black" : "grey",
            margin: 10,
          }}
          disabled={!enableHome}
          onClick={() => {
            // Navigate to /services
            window.location.href = "/" + lang;
          }}
        >
          Home
        </Button>
        <Button
          style={{
            height: 40,
            backgroundColor: "white",
            color: enableServices ? "black" : "grey",
            margin: 10,
          }}
          disabled={!enableServices}
          onClick={() => {
            // Navigate to /services
            window.location.href = "/" + lang + "/services";
          }}
        >
          Services
        </Button>
        <Button
          style={{
            height: 40,
            backgroundColor: "white",
            color: enableProfessionals ? "black" : "grey",
            margin: 10,
          }}
          disabled={!enableProfessionals}
          onClick={() =>
            // Navigate to /professionals
            (window.location.href = "/" + lang + "/professionals")
          }
        >
          Professionals
        </Button>
        <Button
          style={{
            height: 40,
            backgroundColor: "white",
            color: enableCheckout ? "black" : "grey",
            margin: 10,
          }}
          disabled={!enableCheckout}
          onClick={() => {
            // Navigate to /services
            window.location.href = "/" + lang + "/checkout";
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
