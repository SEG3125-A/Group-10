import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Professionals from "./Pages/Professionals"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/services" element={ <Services/> } />
        <Route path="/professionals" element={ <Professionals/> } />
      </Routes>
    </div>
  )
}

export default App
