import React, { useState, useEffect } from "react";
import "../styles/homeStyle.css";

import "../carousel/carousel-style.css";
import "../carousel/Carousel";

import interier from "../images/interier-partners.jpg";
import laptopImage from "../images/laptop.png";
import smartPhoneImage from "../images/smartphone.png";
import cameraImage from "../images/camera.png";
import printerImage from "../images/fax.png";
import usbImage from "../images/usb-c-cable.png";
import processingImage from "../images/processing.png";
import tvImage from "../images/television.png";

import whiteLaptop from '../images/white-laptop.png'
import whiteSmartphone from '../images/white-smartphone.png'
import whiteTV from '../images/white-TV.png'
import whiteCamera from '../images/white-photocamera.png'
import whiteCabel from '../images/white-cabel.png'
import whiteMaterials from '../images/white-materials.png'
import whiteOfficeEquipments from '../images/white-officetechniks.png'


import { Carousel } from "../carousel/Carousel";
import { Carousel2 } from "../carousel/Carousel2";
import { useTheme } from "../hooks/theme";
import Header from "../components/Header";

export function Home() {

  const [isChangedTheme, setIsChangedTheme] = useState(false);
  const { initTheme, setInitTheme } = useTheme();
  const [ Laptop, setLaptop ] = useState('dark');
  const [ Smartphone, setSmartphone ] = useState('dark');
  const [ TV, setTV ] = useState('dark');
  const [ Camera, setCamera ] = useState('dark');
  const [ Cabel, setCabel ] = useState('dark');
  const [ Materials, setMaterials ] = useState('dark');
  const [ Office, setOffice ] = useState('dark');


  const handleChangeTheme = () => {
    setIsChangedTheme(!isChangedTheme);
    setInitTheme(initTheme === "whiteTheme" ? "darkTheme" : "whiteTheme");

    setLaptop(initTheme === 'darkTheme' ? 'white' : 'dark' )
    setSmartphone(initTheme === 'darkTheme' ? 'white' : 'dark' )
    setTV(initTheme === 'darkTheme' ? 'white' : 'dark' )
    setCamera(initTheme === 'darkTheme' ? 'white' : 'dark' )
    setCabel(initTheme === 'darkTheme' ? 'white' : 'dark' )
    setMaterials(initTheme === 'darkTheme' ? 'white' : 'dark' )
    setOffice(initTheme === 'darkTheme' ? 'white' : 'dark' )
  };


  return (
    <div className={initTheme}>
    <Header initTheme={initTheme} handleChangeTheme={handleChangeTheme} />

      <section className="bodyContent">
        <div className="catalog-flex">
          <div className="catalog">
            {/* <h3 className="h3-catalog">Каталог</h3> */}

            <button className="btn-catalog" id="first-el-btn-catalog">
              <img
                src={Laptop === 'dark' ? whiteLaptop : laptopImage}
                alt="laptopImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Компьютеры и комплектующие</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={Smartphone === 'dark' ? whiteSmartphone : smartPhoneImage}
                alt="smartPhoneImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Смартфоны, планшеты</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={TV === 'dark' ? whiteTV : tvImage}
                alt="tvImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Телевизоры, видео-техника</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={Camera === 'dark' ? whiteCamera : cameraImage}
                alt="cameraImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Цифровое фото и видео</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={Cabel === 'dark' ? whiteCabel : usbImage}
                alt="usbImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Сетевое оборудование</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={Materials === 'dark' ? whiteMaterials : processingImage}
                alt="processingImage"
                width="30"
                className="logo-catalog"
              />
              <p className="btn-catalog-txt">Расходные материалы</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img
                src={Office === 'dark' ? whiteOfficeEquipments : printerImage}
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
        {/* <Carousel2 /> */}

      </section>
    </div>
  );
}
