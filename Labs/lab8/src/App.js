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
        <Route path="/en" element={ <Home/> } />
        <Route path="/en/services" element={ <Services/> } />
        <Route path="/en/professionals" element={ <Professionals/> } />
        <Route path="/en/checkout" element={ <Checkout/> } />
        <Route path="/fr" element={ <Home/> } />
        <Route path="/fr/services" element={ <Services/> } />
        <Route path="/fr/professionals" element={ <Professionals/> } />
        <Route path="/fr/checkout" element={ <Checkout/> } />
      </Routes>
    </div>
  )
}

export default App
