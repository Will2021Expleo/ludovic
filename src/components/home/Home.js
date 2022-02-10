import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <div className="description">
        <p>
          Médium - Guérisseur – Magnétiseur - Voyant – Radiesthésiste – Hypnose{" "}
          <br />
          Tous travaux occultes <br />
          Initié depuis plus de 30 ans à la magie indienne, juive, arabe, wicca,
          vaudou, antillaise, (bénéfique comme maléfique). Homme de confiance,
          je vous aiderai à résoudre les problèmes les plus désespérants et
          variés.
        </p>
      </div>
      <Link to="/contact">
        <button className="btn">Contactez-moi</button>
      </Link>
    </div>
  );
}

export default Home