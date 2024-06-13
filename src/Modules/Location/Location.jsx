import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Container } from "../../Components/Container/Container";
import Img from "../../assets/img/props.png";
import "./style.scss";

export const Location = () => {
  return (
    <section className="location">
      <Container>
        <div className="location__wrapper">
          <div className="location__box">
            <h4 className="location__title">
              Индивидуальное предложение для корпоративных клиентов
            </h4>
            <button className="location__btn">
              Отправить заявку
              <MdOutlineArrowForwardIos />
            </button>
          </div>
          <div className="location__div">
            <img src={Img} alt={Img} />
            <div className="location__flex">
              <h4 className="location__flex-title">Татьяна Санникова</h4>
              <p className="location__text">
                Отдел корпоративных продаж АВТОРУСЬ
              </p>
            </div>
          </div>
        </div>

        <div className="location__address">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2120.611896403866!2d69.35499111232008!3d41.265377175826174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5fa5d191b091%3A0x39d9d64b5d748c97!2sToshkent%20shahar!5e0!3m2!1sru!2s!4v1718229449418!5m2!1sru!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="location__iframe"
          ></iframe>

          <div className="location__map">
            <div className="location__map-box">
              <span className="location__map-text">Адрес</span>
              <h4 className="location__map-title">
                Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
              </h4>
            </div>

            <div className="location__map-box">
              <span className="location__map-text">Телефон</span>
              <h4 className="location__map-title">+7 (999) 999-99-99</h4>
              <span className="location__map-spn">Мы на связи</span>
            </div>

            <div className="location__map-box">
              <span className="location__map-text">Режим работы</span>
              <h4 className="location__map-title">
                Ежедневно <br /> с 09:00 до 21:00
              </h4>
            </div>

            <a className="location__tel" href="tel:+7 (999) 999-99-99">
              Заказать звонок
              <MdOutlineArrowForwardIos />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
