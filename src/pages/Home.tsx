import React, { useState, useEffect } from "react";
import HamburgerMenu from "react-hamburger-menu";
import "../styles/style.css";

import "../carousel/carousel-style.css";
import "../carousel/Carousel";

import interier from "../images/interier-partners.jpg";
import logoImage from "../images/logo-partners.png";
import laptopImage from "../images/laptop.png";
import smartPhoneImage from "../images/smartphone.png";
import cameraImage from "../images/camera.png";
import printerImage from "../images/fax.png";
import usbImage from "../images/usb-c-cable.png";
import processingImage from "../images/processing.png";
import tvImage from "../images/television.png";
import moonLogo from "../images/half-moon.png";
import sunLogo from "../images/contrast.png";
import heartPng from "../images/heart.png";
import servicesPng from "../images/vehicle.png";
import backetPng from "../images/shopping-online.png";

import { Carousel } from "../carousel/Carousel";
import { Carousel2 } from "../carousel/Carousel2";
import { useTheme } from "../hooks/theme";
import Header from "../components/Header";

export function HomePage() {
  const [isChangedTheme, setIsChangedTheme] = useState(false);
  const { initTheme, setInitTheme } = useTheme();

  const handleChangeTheme = () => {
    setIsChangedTheme(!isChangedTheme);
    setInitTheme(initTheme === "whiteTheme" ? "darkTheme" : "whiteTheme");
  };

  return (
    <div className={initTheme}>
      <Header initTheme={initTheme} handleChangeTheme={handleChangeTheme} />

      <section className="bodyContent">
        <div className="catalog-flex">
          <div className="catalog">
            <h3 className="h3-catalog">Каталог</h3>

            <button className="btn-catalog">
              <img
                src={laptopImage}
                alt="laptopImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Компьютеры и комплектующие</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={smartPhoneImage}
                alt="smartPhoneImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Смартфоны, планшеты</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={tvImage}
                alt="tvImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Телевизоры, видео-техника</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={cameraImage}
                alt="cameraImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Цифровое фото и видео</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={usbImage}
                alt="usbImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Сетевое оборудование</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={processingImage}
                alt="processingImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Расходные материалы</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={printerImage}
                alt="printerImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Офисная техника</p>
            </button>
          </div>

          <div className="interierPart">
            <img src={interier} alt="interier" />
            <div className="overlay">
              <h1 className="hello-text">
                Магазин электронной техники - Partner's
              </h1>
              <p className="hello-text-p">
                Мы имеем большой каталог электронной техники и не только.
              </p>
            </div>
          </div>
        </div>

        <h2 className="desc-flickity">Топ наших товаров:</h2>

        <Carousel />
        <Carousel2 />

        <footer>Ⓒ Все права защищены</footer>
      </section>
    </div>
  );
}
