//tools
import {Route , Routes } from "react-router-dom"


//Components
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import ProjectDetail from "./Shared/PortfolioDetail";
import DetailMain from "./Pages/DetailMain";



function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route  path="/portfolio" element={<Portfolio/>}/>
        <Route  path="/portfolio/:id" element={<DetailMain/>}/>
      </Routes>
    </>
      
  )
}

export default App
