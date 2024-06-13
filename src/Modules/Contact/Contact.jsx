import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Container } from "../../Components/Container/Container";
import "./style.scss";

export const Contact = () => {
  return (
    <section className="contact">
      <Container>
        <div className="contact__box">
          <h3 className="contact__title">Оставьте заявку на кредит</h3>
          <p className="contact__text">и получите одобрение за 1 день!</p>
          <div className="contact__flex">
            <p className="contact__tel">Телефон</p>
            <div className="contact__inputs">
              <input
                className="contact__inp"
                type="number"
                placeholder="+7 (___) ___-__-__"
              />

              <button className="contact__btn">
                Отправить заявку
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
          <div className="contact__div">
            <input type="checkbox" />
            <span className="contact__div-text">
              Согласен на обработку персональных данных.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
