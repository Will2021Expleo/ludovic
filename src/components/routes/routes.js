import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
//Import des pages
import HomePage from "../../pages/HomePage";
import Services from "../../pages/Services";
import Products from "../../pages/Products";
import Contact from "../../pages/Contact";
import Signup from "../../pages/Signup";


//Error page
import ErrorPage from "../../pages/ErrorPage";

export class PrivateRoutes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/produits" element={<Products/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default PrivateRoutes;





