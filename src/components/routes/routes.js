import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
//Import des pages
import HomePage from "../../pages/HomePage";
import Services from "../../pages/Services";
import Products from "../../pages/Products";
import Contact from "../../pages/Contact";
import Signup from "../../pages/Signup";

import Guerison_par_Magnetisme from "../services/guerison/Guerison_par_Magnetisme";
import Amour from "../services/amour/Amour";
import Argent from "../services/argent/Argent";
import Reussite from "../services/reussite/Reussite";
import Vengence from "../services/vengence/Vengence";
import Desenvoutement from "../services/desenvoutement/Desenvoutement";

//Error page
import ErrorPage from "../../pages/ErrorPage";

export class PrivateRoutes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/guerison-par-magnetisme"
            element={<Guerison_par_Magnetisme />}
          />
          <Route path="/amour" element={<Amour />} />
          <Route path="/argent" element={<Argent />} />
          <Route path="/reussite" element={<Reussite />} />
          <Route path="/vengence" element={<Vengence />} />
          <Route
            path="/desenvoutement-et-protection"
            element={<Desenvoutement />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default PrivateRoutes;
