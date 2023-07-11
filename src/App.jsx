//tools
import {Route , Routes } from "react-router-dom"


//Components
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import DetailMain from "./Pages/DetailMain";
import Contact from "./Pages/Contact";



function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route  path="/portfolio" element={<Portfolio/>}/>
        <Route  path="/portfolio/:id" element={<DetailMain/>}/>
        <Route  path="/contact" element={<Contact/>}/>
      </Routes>
    </>
      
  )
}

export default App
