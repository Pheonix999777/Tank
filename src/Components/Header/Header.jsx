import { Container } from "../Container/Container";
import Logo from "../../assets/img/logo.445e7b59 1.png";
import { SlLocationPin } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";
import { FiPhoneIncoming } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import "./style.scss";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Container>
        <a href="#">
          <img src={Logo} alt={Logo} />
        </a>
        <div className={`header__main ${isOpen ? "active" : ""}`}>
          <div className="header__box">
            <div className="header__location">
              <SlLocationPin style={{ marginRight: "9px" }} />
              <span>
                Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
              </span>
            </div>

            <div className="header__right">
              <div className="header__right-text">
                <CiSettings
                  style={{
                    color: "#FF9549",
                    fontSize: "18px",
                    marginRight: "7px",
                  }}
                />
                <p>Записаться на сервис</p>
              </div>
              <div className="header__right-text">
                <LuClock4
                  style={{
                    color: "#FF9549",
                    fontSize: "16px",
                    marginRight: "7px",
                  }}
                />
                <p>Тест-драйв</p>
              </div>
            </div>
          </div>

          <div className="header__title">
            <div className="header__wrapper">
              <div className="header__text">АВТОРУСЬ TANK </div>
              <span className="header__dealer">Официальный дилер</span>
            </div>

            <div className="header__right-box">
              <div className="header__number">
                <p className="header__phone">+7 (999) 999-99-99</p>
                <p className="header__contact">Мы на связи</p>
              </div>
              <a className="header__tel" href="tel:+7 (999) 999-99-99">
                <FiPhoneIncoming style={{ marginRight: "10px" }} />
                Заказать звонок
              </a>
            </div>
          </div>
        </div>
        <div className="header__menu">
          <div className="header__menu-text">
            <div className="header__menu-box"> АВТОРУСЬ TANK</div>
            <span className="header__menu-dealer">Официальный дилер</span>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <a
              className="header__menu-phone"
              href="tel:+7 (999) 999-99-99"
            >
              <FiPhoneCall />
            </a>
            <button className="header__btn" onClick={toggle}>
              {isOpen ? (
                <AiOutlineClose style={{ fontSize: "22px" }} />
              ) : (
                <RiMenu2Fill style={{ fontSize: "22px" }} />
              )}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
