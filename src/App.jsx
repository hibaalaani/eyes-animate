// App.js
import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import './App.css'
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import EnrollInSession from "./pages/EnrollInSession ";
// import ProgrammingSessions from "./pages/ProgrammingSessions ";
// import SessionDetail from "./pages/SessionDetail";
// import BookingForm from "./pages/BookingForm";
// import {AuthProvider} from "./contexts/AuthContext.jsx";
import LandingPage from "./pages/LandingPage.jsx";
// import './WigglyLayer.css'
// import WigglyLayer from "./components/WigglyLayer.jsx";   
// import ParentDashboard from "./pages/ParentDashboard.jsx";
// import SessionCatalog from "./pages/SessionCatalog.jsx";
import WigglyBackground from "./components/WigglyBackground";
import InteractiveGradientEffect from "./components/InteractiveGradientEffect.jsx";
function App() {

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = document.querySelector('.circle-effect');
      const x = e.clientX;
      const y = e.clientY;

      // Position the circle
      circle.style.top = `${y}px`;
      circle.style.left = `${x}px`;

      // Adjust size based on position (optional for a dynamic effect)
      const distanceFromCenter = Math.abs(window.innerWidth / 2 - x) + Math.abs(window.innerHeight / 2 - y);
      const scale = Math.min(Math.max(1 - distanceFromCenter / 2000, 0.5), 1); // Adjust scale factor as desired
      circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (


    <Router basename="/"> 
       {/* <WigglyBackground />  */}
   <Navbar />   
   <div className="circle-effect"></div>


    {/* Content Layer */}
    <div className="">

      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add other routes here */}
      </Routes>
      {/* <WigglyBackground />  */}
      <Footer />
    </div>
  </Router>
  
  );
}

export default App;
