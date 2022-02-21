import React, { Component } from "react";
import { Link } from "react-router-dom";

class ServicesContent extends Component {
  render() {
    return (
      <div className="cards-box">
        <div className="card">
          <div className="card-head">Guérison par magnétisme</div>
          <ul className="card-content">
            <li>Tête</li>
            <li>Voies respiratoires</li>
            <li>Abdomen</li>
            <li>Systèeme urinaire</li>
            <li>...</li>
          </ul>
          <div className="card-footer">
            <Link to="/guerison-par-magnetisme">
              <button className="btn">En savoir plus</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-head">Amour</div>
          <ul className="card-content">
            <li>Tête</li>
            <li>Voies respiratoires</li>
            <li>Abdomen</li>
            <li>Systèeme urinaire</li>
            <li>...</li>
          </ul>
          <div className="card-footer">
            <Link to="/amour">
              <button className="btn">En savoir plus</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-head">Argent</div>
          <ul className="card-content">
            <li>Tête</li>
            <li>Voies respiratoires</li>
            <li>Abdomen</li>
            <li>Systèeme urinaire</li>
            <li>...</li>
          </ul>
          <div className="card-footer">
            <Link to="/argent">
              <button className="btn">En savoir plus</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-head">Réussite</div>
          <ul className="card-content">
            <li>Tête</li>
            <li>Voies respiratoires</li>
            <li>Abdomen</li>
            <li>Systèeme urinaire</li>
            <li>...</li>
          </ul>
          <div className="card-footer">
            <Link to="/reussite">
              <button className="btn">En savoir plus</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-head">Vengence</div>
          <ul className="card-content">
            <li>Tête</li>
            <li>Voies respiratoires</li>
            <li>Abdomen</li>
            <li>Systèeme urinaire</li>
            <li>...</li>
          </ul>
          <div className="card-footer">
            <Link to="/vengence">
              <button className="btn">En savoir plus</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-head">Désenvoutement/Protection</div>
          <ul className="card-content">
            <li>Tête</li>
            <li>Voies respiratoires</li>
            <li>Abdomen</li>
            <li>Systèeme urinaire</li>
            <li>...</li>
          </ul>
          <div className="card-footer">
            <Link to="/desenvoutement-et-protection">
              <button className="btn">En savoir plus</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesContent;
