import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="text-center">
        <div className="nav justify-content-center">
          <a className="nav-link" href="#program">
            Програма
          </a>
          <a className="nav-link" href="#organizator">
            Организатор
          </a>
          <a className="nav-link" href="#srokove">
            Срокове
          </a>
          <a className="nav-link" href="#opinions">
            Отзиви
          </a>
          <a className="nav-link" href="#rules">
            Правила
          </a>
          <a className="nav-link" href="#subscribe">
            Абонирай се
          </a>
        </div>
        <i>Copyright 2019</i>
      </div>
    );
  }
}
export default Footer;
