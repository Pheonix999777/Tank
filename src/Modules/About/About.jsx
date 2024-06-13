import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Container } from "../../Components/Container/Container";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { LuClipboardCheck } from "react-icons/lu";
import Img from "../../assets/img/image 286.png";
import Img2 from "../../assets/img/image 287.png";
import "./style.scss";

export const About = () => {
  const TimeCircle = ({ value, label }) => (
    <div style={{ textAlign: "center" }}>
      <div className="circle__font">{value}</div>
      <div className="circle__color">{label}</div>
    </div>
  );

  const renderTime = ({ remainingTime }) => {
    const days = Math.floor(remainingTime / (24 * 3600));
    const hours = Math.floor((remainingTime % (24 * 3600)) / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    if (remainingTime >= 24 * 3600) {
      return <TimeCircle value={days} label="дня" />;
    } else if (remainingTime >= 3600) {
      return <TimeCircle value={hours} label="часов" />;
    } else if (remainingTime >= 60) {
      return <TimeCircle value={minutes} label="минут" />;
    } else {
      return <TimeCircle value={seconds} label="секунд" />;
    }
  };

  return (
    <section className="about">
      <Container>
        <div className="about__box">
          <h2 className="about__box-title">
            Срок действия <br /> спецпредложения:
          </h2>

          <div className="about__div">
            <div className="about__circle">
              <CountdownCircleTimer
                isPlaying
                duration={30 * 24 * 60 * 60}
                colors="#ff9549"
                strokeWidth={3}
                size={55}
                trailColor="#888888"
                style={{ border: "4px solid rgba(255, 255, 255, 0.2)" }}
                onComplete={() => [true, 0]}
              >
                {renderTime}
              </CountdownCircleTimer>
              <span className="about__point">:</span>
            </div>

            <div className="about__circle">
              <CountdownCircleTimer
                isPlaying
                duration={24 * 60 * 60}
                colors="#ff9549"
                strokeWidth={3}
                size={55}
                trailColor="#888888"
                style={{ border: "4px solid rgba(255, 255, 255, 0.2)" }}
                onComplete={() => [true, 0]}
              >
                {renderTime}
              </CountdownCircleTimer>
              <span className="about__point">:</span>
            </div>

            <div className="about__circle">
              <CountdownCircleTimer
                isPlaying
                duration={60 * 60}
                colors="#ff9549"
                strokeWidth={3}
                size={55}
                trailColor="#888888"
                style={{ border: "4px solid rgba(255, 255, 255, 0.2)" }}
                onComplete={() => [true, 0]}
              >
                {renderTime}
              </CountdownCircleTimer>
              <span className="about__point">:</span>
            </div>

            <div className="about__circle">
              <CountdownCircleTimer
                isPlaying
                duration={60}
                colors="#ff9549"
                strokeWidth={3}
                size={55}
                trailColor="#888888"
                style={{ border: "4px solid rgba(255, 255, 255, 0.2)" }}
                onComplete={() => [true, 0]}
              >
                {renderTime}
              </CountdownCircleTimer>
            </div>
          </div>

          <a className="about__link" href="#">
            Узнать цену с выгодами
            <MdOutlineArrowForwardIos />
          </a>
        </div>

        <ul className="about__ul">
          <li className="about__list">
            <PiMedal className="about__icon" />
            <div className="about__ul-text">
              <h3 className="about__ul-title">Официальный дилер</h3>
              <p className="about__ul-wrapper">
                Гарантируем высокое качество обслуживания.
              </p>
            </div>
          </li>
          <li className="about__list">
            <RxCounterClockwiseClock className="about__icon" />
            <div className="about__ul-text">
              <h3 className="about__ul-title">
                Гарантируем высокое качество обслуживания.
              </h3>
              <p className="about__ul-wrapper">
                Удобный процесс покупки, включая оформление всех документов.
              </p>
            </div>
          </li>
          <li className="about__list">
            <LuClipboardCheck className="about__icon" />
            <div className="about__ul-text">
              <h3 className="about__ul-title">ВСЕ КОМПЛЕКТАЦИИ В НАЛИЧИИ</h3>
              <p className="about__ul-wrapper">
                Широкий выбор комплектаций, c полным пакетом документов
              </p>
            </div>
          </li>
        </ul>

        <div className="about__wrapper">
          <h3 className="about__wrapper-title">
            ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ 100
            000 ₽
          </h3>
          <div className="about__wrapper-box">
            <div className="about__wrapper-flex">
              <img src={Img} alt={Img} />
              <p>TANK 300</p>
            </div>
            <div className="about__wrapper-flex">
              <img src={Img2} alt={Img2} />
              <p>TANK 300</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
