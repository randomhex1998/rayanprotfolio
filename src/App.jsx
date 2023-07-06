//tools
import {Route , Routes } from "react-router-dom"


//Components
import Home from "./Pages/Home"



function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home/>}/>
      </Routes>
    </>
      
  )
}

export default App
