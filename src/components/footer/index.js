import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="title">Mage Mandrak</div>
        <div className="container">
          <div className="col contact">
            <h3>Lettre d'engagement</h3>
            <ul>
              <Link to="/lettre-tous-travaux-occultes">
                <li>Tous travaux occultes</li>
              </Link>
              <Link to="/magnetisme-et-guerison">
                <li>Magnétisme et guérison</li>
              </Link>
            </ul>
          </div>
          <div className="col">
            <h3>Contact</h3>
            <ul>
              <li>Tél : 06 27 66 17 78</li>
              <li>Mail </li>
            </ul>
          </div>
          <div className="col social-network">
            <h3>Réseaux sociaux</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="copyright">Copyright (c) - 2022 - Mage Mandrak</div>
      </div>
    );
  }
}

export default Footer;
