import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div className="container-fluid p-0" id="top">
        <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light">
          <img
            src={require("../Images/brand.png")}
            width="30"
            height="30"
            alt=""
          />
          <a className="navbar-brand" href="top">
            Педагогика Конф.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto">
              <li>
                <a className="nav-link" href="#program">
                  Програма
                </a>
              </li>

              <li>
                <a className="nav-link" href="#organizator">
                  Организатор
                </a>
              </li>
              <li>
                <a className="nav-link" href="#srokove">
                  Срокове
                </a>
              </li>
              <li>
                <a className="nav-link" href="#rules">
                  Правила
                </a>
              </li>

              <li>
                <a className="nav-link" href="#opinions">
                  Отзиви
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
