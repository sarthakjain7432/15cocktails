import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Cocktail from "./pages/Cocktail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cocktail/:id" element={<Cocktail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
