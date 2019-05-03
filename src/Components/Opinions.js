import React, { Component } from "react";

class Opinions extends Component {
  render() {
    return (
      <div className="row no-gutters pt-3" id="opinions">
        <div className="col-8 offset-2 text-center">
          <div
            id="carouselOpinions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselOpinions"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselOpinions" data-slide-to="1" />
              <li data-target="#carouselOpinions" data-slide-to="2" />
              <li data-target="#carouselOpinions" data-slide-to="3" />
            </ol>
            <div className="carousel-inner p-5">
              <div className="carousel-item active" id="carouselSize">
                <p className="d-block w-100 h-100">
                  <img
                    className="col"
                    src={require("../Images/auditorium-benches-board-207691.jpg")}
                    alt=""
                  />
                </p>
              </div>
              <div className="carousel-item" id="carouselSize">
                <p className="d-block w-100 h-100">
                  "С удоволствие участвах в този форум, в този прекрасен град с
                  хубави хора. Взаимствах чудесни идеи за работа, които ще
                  приложа. Бях тук за първи път и ще се опитам да не пропускам
                  проявите в град Сандански относно предучилищното възпитание.{" "}
                  <br />
                  <br /> <i className="text-right">Юлия Ненова, гр. Габрово</i>
                </p>
              </div>
              <div className="carousel-item" id="carouselSize">
                <p className="d-block w-100 h-100">
                  Винаги с голямо вълнение участвам в конференцията в Сандански.
                  И винаги си тръгвам удовлетворена, обогатена и спокойна за
                  предучилищния сектор – щом има такива колеги и деятели, той ще
                  оцелее и винаги ще бъде водеща част от образователната ни
                  система. Благодаря!
                  <br />
                  <br />{" "}
                  <i className="text-right">Гроздалина Петрова, общ. Монтана</i>
                </p>
              </div>
              <div className="carousel-item" id="carouselSize">
                <p className="d-block w-100 h-100">
                  Възхитени сме от организацията на конференцията. Радваме се,
                  че чухме интересни и практични разработки. Тази конференция
                  заслужава да бъде отразена в специализирания и централния
                  печат и медии.
                  <br />
                  <br />{" "}
                  <i className="text-right">
                    {" "}
                    С уважение и възхищение Трифонова и Антоанета Златкова,
                    Плевен
                  </i>
                </p>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselOpinions"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselOpinions"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Opinions;
