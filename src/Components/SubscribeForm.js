import React, { Component } from "react";

export default class SubscribeForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      surname: "",
      lastname: ""
    };
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div className="row no-gutters pt-3" id="subscribe">
        <div className="col-8 offset-2">
          <h3>АБОНИРАЙТЕ СЕ</h3>
          <form
            className="p-3"
            action="https://gmail.us20.list-manage.com/subscribe/post"
            method="POST"
          >
            <input type="hidden" name="u" value="e4c38927c631c2b77e1f8a9b4" />
            <input type="hidden" name="id" value="e2e079ce98" />

            <div
              className="mergeRow dojoDndItem mergeRow-email"
              id="mergeRow-0"
            >
              <label htmlFor="MERGE0">
                Email Адрес <span className="req asterisk">*</span>
              </label>
              <div className="field-group">
                <input
                  className="form-control"
                  type="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  name="MERGE0"
                  id="MERGE0"
                  size="25"
                  value={this.email}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
              <label className="pt-3" htmlFor="MERGE1">
                Име
              </label>
              <div className="field-group">
                <input
                  className="form-control"
                  type="text"
                  name="MERGE1"
                  id="MERGE1"
                  size="25"
                  value={this.surname}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-2">
              <label className="pt-2" htmlFor="MERGE2">
                Фамилия
              </label>
              <div className="field-group">
                <input
                  className="form-control"
                  type="text"
                  name="MERGE2"
                  id="MERGE2"
                  size="25"
                  value={this.lastname}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="submit_container clear  pt-3">
              <input
                className="btn btn-primary"
                type="submit"
                name="submit"
                value="Абониране"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
