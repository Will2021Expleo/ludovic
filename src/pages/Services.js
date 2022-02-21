import React from "react";

import { servicesData } from "../components/services/guerison/services_data";
import ServicesContent from "../components/services/guerison/Services";

class Services extends React.Component {
  render() {
    return (
      <>
        <div className="services-page">
          <ServicesContent />
        </div>
      </>
    );
  }
}

export default Services;

{
  /* <div className="card-head">Guérison par magnétisme</div>
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
            <div className="card-content">Content</div>
            <div className="card-footer">
              <button className="btn">En savoir plus</button>
            </div>
          </div>
          <div className="card">
            <div className="card-head">Argent</div>
            <div className="card-content">Content</div>
            <div className="card-footer">
              <button className="btn">En savoir plus</button>
            </div>
          </div>
          <div className="card">
            <div className="card-head">Guérison par magnétisme</div>
            <div className="card-content">Content</div>
            <div className="card-footer">
              <button className="btn">En savoir plus</button>
            </div>
          </div>
          <div className="card">
            <div className="card-head">Amour</div>
            <div className="card-content">Content</div>
            <div className="card-footer">
              <button className="btn">En savoir plus</button>
            </div>
          </div>
          <div className="card">
            <div className="card-head">Argent</div>
            <div className="card-content">Content</div>
            <div className="card-footer">
              <button className="btn">En savoir plus</button>
            </div>
          </div>
        </div> */
}
