import NavBar from "../Components/NavBar";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, TextField, Grid } from "@mui/material";
import { translate } from "../I18n";

function Checkout() {
  const url = window.location.href;
  const isFr = url.includes("/fr");
  let lang = "en";
  if (isFr) {
    lang = "fr";
  }

  const history = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const [selectedProfessional, setSelectedProfessional] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
    zipCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleConfirm = () => {
    alert(translate("paymentConfirmation", lang));
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const service = queryParams.get("service");
    const professional = queryParams.get("professional");

    // Redirect if service or professional is missing,
    // do you guys think this is good?
    if (!service || !professional) {
      window.location.replace(`/${lang}/services`);
    } else {
      setSelectedService(service);
      setSelectedProfessional(professional);
    }
  }, [history]);

  const queryParams = new URLSearchParams(window.location.search);
  const service = queryParams.get("service");
  const professional = queryParams.get("professional");

  useState(() => {
    setSelectedService(service);
    setSelectedProfessional(professional);
  }, [service, professional]);

  return (
    <div>
      <NavBar />
      <div style={{ fontFamily: "NonSans", fontSize: 40, margin: 20 }}>
        {translate("checkout", lang)}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            margin: 10,
            padding: 20,
            width: 400,
            borderRadius: 20,
            backgroundColor: "#f5f5f5",
          }}
        >
          <div style={{ marginBottom: 20, fontSize: 20 }}>
            {translate("selectededService", lang)}: {selectedService}
          </div>
          <div style={{ marginBottom: 20, fontSize: 20 }}>
            {translate("selectedProfessional", lang)}: {selectedProfessional}
          </div>
          <form style={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label={translate("name", lang)}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label={translate("credtiCardNumber", lang)}
                  name="creditCardNumber"
                  value={formData.creditCardNumber}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label={translate("expirationDate", lang)}
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label={translate("cvv", lang)}
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label={translate("zipCode", lang)}
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </form>
        </Card>
        <Button onClick={handleConfirm} style={{ marginTop: 20 }}>
          {translate("confirmAndPay", lang)}
        </Button>
      </div>
    </div>
  );
}

export default Checkout;
