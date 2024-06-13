import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Container } from "../Container/Container";
import { SlLocationPin } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";
import "./style.scss";
import { FiPhoneIncoming } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <button className="footer__btn">
          Дисклеймер <MdOutlineArrowForwardIos className="footer__arrow" />
        </button>
        <div className="footer__box">
          <p className="footer__text">
            TANK 300 за 3 799 000руб с учетом поддержек. Цена на модель TANK
            (ТЭНК) 300 в комплектации Adventure (Эдвенчер) с двигателем 2,0T
            4WD, 2023 года производства, цвет автомобиля: белый, с учетом выгоды
            по трейд-ин 300 000 рублей. В трейд-ин принимаются автомобили с
            пробегом со сроком владения и регистрации (постановки на учет) в
            органах ГИБДД не менее 6 месяцев (в отношении автомобилей бренда
            TANK, Haval, Great Wall – 3 месяца) до сдачи автомобиля в трейд-ин.
            В качестве документов, подтверждающих срок владения сдаваемого в
            трейд-ин автомобиля, собственнику необходимо предоставить копию ПТС
            или СТС или карточку учета ТС из ГИБДД с печатью и подписью.
            Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ.
            Предложение ограничено, не является офертой и действует с
            01.04.2024г. <br /> <br /> TANK 500 за 5 349 000 руб с учетом
            поддержек. Цена на модель TANK (ТЭНК) 500 в комплектации Adventure
            (Эдвенчер) с двигателем 3,0T 4WD, 2023 года производства, цвет
            автомобиля: белый, с учетом прямой выгоды в 950 000 рублей.
            Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ.
            Предложение ограничено, не является офертой и действует с
            01.04.2024г.
          </p>
        </div>

        <div className="footer__wrapper">
          <div className="footer__left">
            <div className="footer__title">
              <h3> АВТОРУСЬ TANK</h3>
              <span className="footer__dealer">Официальный дилер</span>
            </div>

            <span className="footer__spn">
              <SlLocationPin style={{ marginRight: "9px" }} />
              Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
            </span>

            <div className="footer__div">
              <span className="footer__dealer">Официальный дилер</span>
              <p style={{ fontSize: "16", fontWeight: "300" }}>
                ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903
              </p>
            </div>
          </div>

          <div className="footer__right">
            <div className="footer__right-box">
              <div className="footer__right-number">
                <p>+7 (999) 999-99-99</p>
                <span className="footer__contact">Мы на связи</span>
              </div>
              <a className="header__tel" href="tel:+7 (999) 999-99-99">
                <FiPhoneIncoming style={{ marginRight: "10px" }} />
                Заказать звонок
              </a>
            </div>
            <div className="footer__right-text">
              <span className="footer__right-settings">
                <CiSettings
                  style={{
                    color: "#FF9549",
                    fontSize: "18px",
                    marginRight: "7px",
                  }}
                />
                Записаться на сервис
              </span>

              <span className="footer__right-settings">
                <LuClock4
                  style={{
                    color: "#FF9549",
                    fontSize: "16px",
                    marginRight: "7px",
                  }}
                />
                <p>Тест-драйв</p>
              </span>
            </div>
          </div>
        </div>

        <div className="footer__main">
          <p className="footer__main-text">© 2024, АВТОРУСЬ ТАНК</p>
          <div className="footer__main-box">
            <p className="footer__main-word">Правовая информация</p>
            <p>Условия акции</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
