import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="row no-gutters">
        <div className="text-center align-self-center col">
          <h2>
            20 ГОДИНИ <br /> СЪВРЕМЕННИ ТЕНДЕНЦИИ <br /> В ПРЕДУЧИЛИЩНОТО
            ВЪЗПИТАНИЕ
          </h2>
          <br />
          <div className="row justify-content-around">
            <a className="btn btn-info col-3" href="#subscribe">
              Абонирай се
            </a>
            <a className="btn btn-outline-info col-3" href="#program">
              Програма
            </a>
          </div>
        </div>
        <img className="col" src={require("../Images/auditorium.png")} alt="" />
      </div>
    );
  }
}

export default Hero;
