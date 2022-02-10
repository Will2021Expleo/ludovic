import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="title">Mage Mandrak</div>
        <div className="container">
          <div className="col contact">
            <ul>
              <li>mail</li>
              <li>phone</li>
              <li>---</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>---</li>
              <li>---</li>
              <li>---</li>
            </ul>
          </div>
          <div className="col social-network">
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

export default Footer