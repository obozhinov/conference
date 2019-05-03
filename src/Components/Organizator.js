import React, { Component } from "react";

class Organizator extends Component {
  render() {
    return (
      <div className="row no-gutters pt-3" id="organizator">
        <div className="col-8 offset-2">
          <h3 className="text-left">ОРГАНИЗАТОР</h3>
          <div className="row no-gutters pt-5">
            <div className="col-sm text-center px-2 pb-4">
              <img
                src={require("../Images/organizator-pic.png")}
                width="214"
                height="214"
                alt=""
              />
              <br />
              <i>
                <b>Мария Маринова Чинкова-Стаматова</b> <br />
                Директор на ДГ „Пролет”, гр. Сандански
              </i>
            </div>
            <div className="col-lg">
              <p>
                Мария Маринова Чинкова-Стаматова е директор на ДГ „Пролет”, гр.
                Сандански. Единадесет години работи като учител и шестнадесет
                като директор на детско заведение. Инициатор и организатор на
                двадесет международни научно-практически конференции на тема
                «Съвременни тенденции в предучилищното възпитание», на фестивали
                и състезания, и на кръгли маси посветени на дискуси за
                възпитанието и обучението на деца от 3-7 години. Завършила СУ
                «КЛ. Охридски» - филиал Благоевград, специалност «Педагогика за
                подготовка на детски учители». Защитила първа квалификационна
                степен в системата на образованието.{" "}
              </p>
              <p>
                Шестнадесет години, избирана за общински съветник, един мандат
                избрана за Предсидател на общински съвет Струмяни, два мандата
                заместник-кмет на община Сандански по хуманитарни и социални
                дейности, била е член на управителния съвет на ОМЕП за България
                /Международна организация за предучилищно образование/,
                ръководила е детска театрална група, член на редица комисии.{" "}
              </p>
              <p>
                Наградена с плакет на община Сандански за активна педагогическа
                дейност; Носител на почетно отличие „Неофит Рилски” на
                Министерство на образованието и науката; Носител на почетен знак
                „Личност с траен принос към местното самоуправление”, присъдено
                от Националното сдружение на общините в Р България; Наградена
                със сертификат „Пазител на знанието” за високи постижения в
                областта на образованието, от Институт по качество в
                образованието.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Organizator;