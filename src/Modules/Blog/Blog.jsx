import { Container } from "../../Components/Container/Container";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import Img from "../../assets/img/photo1.png";
import Img1 from "../../assets/img/photo2.png";
import Img2 from "../../assets/img/photo3.png";
import Img3 from "../../assets/img/photo4.png";
import photo1 from "../../assets/img/Imiges1.png";
import photo2 from "../../assets/img/Imiges2.png";
import photo3 from "../../assets/img/Imiges3.png";
import photo4 from "../../assets/img/Imiges4.png";
import photo5 from "../../assets/img/Imiges5.png";
import { useState } from "react";
import { LuClipboardCheck } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";
import "./style.scss";

export const Blog = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [modal, setModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [Img, Img1, Img2, Img3];
  const colors = ["#b0a798", "#e6e7e8", "#a2a4ab", "#212329"];
  const modalImages = [photo1, photo2, photo3, photo4, photo5];
  const photos = [photo1, photo2, photo3, photo4, photo5];

  const handleClick = (index) => {
    setSelectedColor(index);
  };

  const handleOpen = (index) => {
    setSelectedImageIndex(index);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <section className="blog">
      <Container>
        <div className="blog__main">
          <div className="blog__box">
            <span className="service__text">Только в АВТОРУСЬ!</span>
            <h2 className="service__title">TANK 500 </h2>
            <h3 className="service__info">Выгода до 700 000 ₽</h3>
            <button className="service__alert">
              <FiAlertTriangle style={{ marginRight: "9px" }} />
              Ограниченное предложение!
              <FiAlertTriangle style={{ marginLeft: "9px" }} />
            </button>

            <div className="service__btns">
              <a className="service__link" href="#">
                Узнать стоимость по акции
                <MdOutlineArrowForwardIos />
              </a>

              <a className="service__link" href="#">
                Тест-драйв
                <MdOutlineArrowForwardIos />
              </a>

              <a className="service__link" href="#">
                Рассчитать кредит
                <MdOutlineArrowForwardIos />
              </a>
            </div>
          </div>

          <div className="blog__right">
            <img
              className="service__img"
              src={images[selectedColor % images.length]}
              width={400}
              alt="Selected"
            />
            <div className="service__word">
              <p className="service__word-text">
                Осталось 5 автомобилей по спец цене
              </p>
            </div>
            <div className="blog__colors">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className="service__color"
                  style={{ backgroundColor: color }}
                  onClick={() => handleClick(index)}
                >
                  {selectedColor === index && <FaCheck />}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ul className="service__ul">
          <li className="service__lsit">
            <LuClipboardCheck style={{ color: "#ff9549", fontSize: "20px" }} />
            <h4 className="service__lsit-text">
              Автомобили в наличии <br /> с ПТС
            </h4>
          </li>
          <li className="service__lsit">
            <LuClipboardCheck style={{ color: "#ff9549", fontSize: "20px" }} />
            <h4 className="service__lsit-text">
              Сервисная поддержка <br /> до 5 лет / 150 000 км
            </h4>
          </li>

          <li className="service__lsit">
            <LuClipboardCheck style={{ color: "#ff9549", fontSize: "20px" }} />
            <h4 className="service__lsit-text">
              Улучшим любое <br /> предложение
            </h4>
          </li>

          <li className="service__lsit">
            <LuClipboardCheck style={{ color: "#ff9549", fontSize: "20px" }} />
            <h4 className="service__lsit-text">Кредит 0,01%</h4>
          </li>
        </ul>
        <div className="service__imiges">
          {photos.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image${index}`}
              width={240}
              height={200}
              onClick={() => handleOpen(index)}
              className="service__photos"
            />
          ))}
        </div>
      </Container>

      {modal && (
        <div className="modal" onClick={handleClose}>
          <div className="modal__overlay" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={handleClose}>
              <RiCloseLargeFill />
            </button>
            <img
              className="modal__img"
              src={modalImages[selectedImageIndex]}
              alt={`modal-image${selectedImageIndex}`}
            />
            <div className="modal__box">
              {modalImages.map((photo, index) => (
                <img
                  key={index}
                  className="modal__photo"
                  src={photo}
                  alt={`photo${index}`}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
