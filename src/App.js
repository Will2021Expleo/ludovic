import React from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/routes/routes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
        <PrivateRoutes/>
      <Footer/>
    </div>
  );
}

export default App



//  <Router>
//           <Navbar />
//           <PrivateRoutes />
//         </Router>

//         <Footer />



