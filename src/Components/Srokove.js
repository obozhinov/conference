import React, { Component } from "react";

class Srokove extends Component {
  render() {
    return (
      <div className="row no-gutters pt-5" id="srokove">
        <div className="col-8 offset-2">
          <h3 className="text-left">СРОКОВЕ И ФОРМИ НА УЧАСТИЕ</h3>
          <div className="text-left p-3">
            <p>
              <b>Форми на участие:</b> с доклад, с научно съобщение, слушател в
              секция по избор
            </p>
            <hr />
            <div className="row no-gutters">
              <div className="col-3">
                <b>10.03.2019</b>
              </div>
              <div className="col-5">
                <b>
                  Последен срок за приемане на заявки за участие и научните
                  съобщения и доклади
                </b>
              </div>
            </div>
            <hr />
            <div className="row no-gutters">
              <div className="col-3">
                <b>11.04.2019</b>
              </div>
              <div className="col-5">
                <b>
                  Последен срок за приемане на заявки за щандове, табла, изложби
                  на издателства
                </b>
              </div>
            </div>
            <hr />
            <div className="row no-gutters">
              <div className="col-3">
                <b>10.05.2019</b>
              </div>
              <div className="col-5">
                <b>
                  Всички участници ще получат подробна програмата за реда на
                  презентациите включени в конференцията |
                </b>{" "}
                Времетраене на презентация - 5 мин.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Srokove;
