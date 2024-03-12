import { Button } from '@mui/material';

function App() {
  return (
    <div>
      <img src={require("./background.png")} style={{width: "100%", height: "100%", position: "absolute", left: 0, top: 0, zIndex: -100}}/>
      <header style={{fontFamily: "NonSans", fontSize: 80, textAlign: "center", bottom: "50%", position: "absolute", width: "100%"}}>CosmetiGo</header>
      <div style={{position: "absolute", height: 60, width: "100%", top:0, marginTop: 10, display: "flex", flexDirection: "row"}}>
        {/** Header */}
        <Button style={{height: 40, backgroundColor: "white", color: "black", margin: 10}}>Services</Button>
        <Button style={{height: 40, backgroundColor: "white", color: "black", margin: 10}}>Professionals</Button>
      </div>
    </div>
    
  );
}

export default App;
