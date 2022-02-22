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
            <li>Système urinaire</li>
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
            <li>Retour de l'être aimé</li>
            <li>Retour d'affection</li>
            <li>Rendre fidèle l'être chère</li>
            <li>Pour éloigner un prétendant</li>
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
            <li>Attirer la clientèle</li>
            <li>Pour la chance aux jeux</li>
            <li>Trouver un travail bien rémunéré</li>
            <li>Obtenir une promotion</li>
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
            <li>Réussite scolaire</li>
            <li>Réussir un concours, permis, autres…</li>
            <li>Pour aller au delà de vos limites</li>
            <li>Faire aboutir rapidement un procès</li>
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
            <li>Abaisser un ennemi</li>
            <li>Faire souffrir de douleur un ennemi</li>
            <li>Rendre fou (folle)</li>
            <li>Faire taire les mauvaises langues</li>
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
            <li>Désenvoutement être humain ou animal</li>
            <li>Protection contre les accidents</li>
            <li>Contre le mauvais œil</li>
            <li>Envoutement</li>
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
