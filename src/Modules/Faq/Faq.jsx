import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Container } from "../../Components/Container/Container";
import Img from "../../assets/img/imgCar.png";
import Car from "../../assets/img/supercar.png";
import { LuClipboardCheck } from "react-icons/lu";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./style.scss";

export const Faq = () => {
  const dropdownValues = [
    { label: "Tank" },
    { label: "Item2" },
    { label: "Item3" },
  ];

  const [selectedValue, setSelectedValue] = useState(dropdownValues[0]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? null : index);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    setOpenDropdownIndex(null);
  };

  return (
    <section className="faq">
      <Container>
        <h2 className="faq__title">ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ</h2>
        <div className="faq__flex">
          {["Модель", "Комплектация", "Двигатель"].map((label, index) => (
            <div className="faq__box" key={index}>
              <span
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "300",
                  color: "#939697",
                  marginBottom: "7px",
                }}
              >
                {label}
              </span>
              <div className="faq__dropdown">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="faq__button"
                >
                  {selectedValue.label}
                  <span className="faq__dropdown-arrow">
                    <IoIosArrowDown />
                  </span>
                </button>
                {openDropdownIndex === index && (
                  <ul className="faq__menu">
                    {dropdownValues.map((option, i) => (
                      <li
                        key={i}
                        onClick={() => handleSelect(option)}
                        className="faq__dropdown-item"
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <ul className="faq__ul">
          {[1, 2, 3].map((_, i) => (
            <li className="faq__card" key={i}>
              <img src={Img} alt={Img} />
              <div className="faq__card-main">
                <div className="faq__block">
                  <h3 className="faq__card-title">TANK 300</h3>
                  <span className="faq__card-spn">
                    2.0 л. Бензин, Полный, Автоматическая
                  </span>
                  <del className="faq__del">3 649 000 ₽</del>
                  <div className="faq__wrapper">
                    <div className="faq__line">
                      <LuClipboardCheck
                        style={{ color: "#ff9549", marginRight: "10px" }}
                      />
                      <span>Выгода по Trade-in до 450 000 ₽</span>
                    </div>
                    <div className="faq__line">
                      <LuClipboardCheck
                        style={{ color: "#ff9549", marginRight: "10px" }}
                      />
                      <span>Керамическое покрытие в подарок!</span>
                    </div>
                  </div>
                </div>
                <div className="faq__right">
                  <a className="faq__link" href="#">
                    Получить предложение
                    <MdOutlineArrowForwardIos />
                  </a>
                  <a className="faq__link" href="#">
                    Тест-драйв
                    <MdOutlineArrowForwardIos />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="faq__btn-box">
          <button className="faq__btn">Загрузить еще</button>
        </div>

        <div className="faq__car-box">
          <img className="faq__car" src={Car} alt={Car} />
          <div className="faq__car-wrapper">
            <h3 className="faq__car-title">
              ОБМЕН ПО TRADE-IN НА ВЫГОДНЫХ УСЛОВИЯХ
            </h3>
            <button className="faq__car-btn">
              Отправить заявку
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
