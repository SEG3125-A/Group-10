import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Services from "./Pages/Services"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/services" element={ <Services/> } />
      </Routes>
    </div>
  )
}

export default App
