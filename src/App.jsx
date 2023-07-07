//tools
import {Route , Routes } from "react-router-dom"


//Components
import Home from "./Pages/Home";
import Portfolio from "./Pages/Home";



function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </>
      
  )
}

export default App
