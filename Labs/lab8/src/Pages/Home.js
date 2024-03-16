import React from 'react';
import { Button, Card } from '@mui/material';

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', position: 'relative' }}>
      <img src={require('../images/background.png')} alt="Background" style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, zIndex: -1 }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card style={{ margin: 10, height:"40vh", padding: 20, width: "50vw", borderRadius: 20, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
            <header style={{ fontSize: 50, margin: 50, marginBottom:80}}>CosmetiGo</header>
            <Button style={{ height: "10vh",border:"3px solid", width:"20vw",fontWeight:"bolder",fontSize:"larger", backgroundColor: '#e1f1fd', color: 'black'}} onClick={() => (window.location.href = '/services')}>
              Get Started
            </Button>
        </Card>
      </div>
    </div>
  );
}

export default Home;
