import React from "react";
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Footer from "./components/Footer";
import { Scroll } from "lucide-react";
import About from "./components/About";
import LocomotiveScroll from "locomotive-scroll";




function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Team/>
      <Events/>
      <Projects/>
      
      <Footer/>
    
   
    
     

    </div>
  );
}

export default App;
