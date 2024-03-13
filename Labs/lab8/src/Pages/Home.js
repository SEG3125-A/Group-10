import { Button } from '@mui/material';

function Home() {
  return (
    <div>
      <img src={require("../images/background.png")} style={{width: "100%", height: "100%", position: "absolute", left: 0, top: 0, zIndex: -100}}/>
      <header style={{fontFamily: "NonSans", fontSize: 80, textAlign: "center", bottom: "50%", position: "absolute", width: "100%"}}>CosmetiGo</header>
      <Button style={{height: 40, backgroundColor: "white", color: "black", margin: 10, marginLeft: 'auto', position: "absolute", bottom: "40%", left: "45%"}} onClick={() => {
        // Navigate to /services
        window.location.href = "/services";
      }
      }>Get Started</Button>
    </div>
    
  );
}

export default Home;