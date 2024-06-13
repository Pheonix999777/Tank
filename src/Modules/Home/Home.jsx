import { Container } from "../../Components/Container/Container";
import image from "../../assets/img/image 285.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./style.scss";

export const Home = () => {
  return (
    <section className="home">
      <img className="home__img" src={image} alt={image} />
      <Container>
        <div className="home__wrapper">
          <span className="home__text">Улучшим любые условия</span>
          <h1 className="home__title">TANK 500</h1>
          <p className="home__cars">Осталось всего 5 автомобилей!</p>
          <a href="#" className="home__link">
            Получить предложение <MdOutlineArrowForwardIos />
          </a>
        </div>
      </Container>
    </section>
  );
};
