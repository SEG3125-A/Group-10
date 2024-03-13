import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Professionals from "./Pages/Professionals"
import Checkout from "./Pages/Checkout"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/services" element={ <Services/> } />
        <Route path="/professionals" element={ <Professionals/> } />
        <Route path="/checkout" element={ <Checkout/> } />
      </Routes>
    </div>
  )
}

export default App
