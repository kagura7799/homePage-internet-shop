import React, { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import '../styles/style.css'

import '../carousel/carousel-style.css'
import '../carousel/Carousel'

import interier from '../images/interier-partners.jpg'
import logoImage from '../images/logo-partners.png'; 
import laptopImage from '../images/laptop.png';
import smartPhoneImage from '../images/smartphone.png';
import cameraImage from '../images/camera.png';
import printerImage from '../images/fax.png';
import usbImage from '../images/usb-c-cable.png';
import processingImage from '../images/processing.png';
import tvImage from '../images/television.png';
import moonLogo from '../images/half-moon.png';
import sunLogo from '../images/contrast.png';
import heartPng from '../images/heart.png'
import servicesPng from '../images/vehicle.png'
import backetPng from '../images/shopping-online.png'

import { Carousel } from '../carousel/Carousel';
import { Carousel2 } from '../carousel/Carousel2';

export function HomePage() {
  const [initTheme, setInitTheme] = useState(localStorage.getItem('theme') || 'whiteTheme');
  const [logo, setLogo] = useState(initTheme === 'whiteTheme')

  const [isOpen, setIsOpen] = useState(false);

  const addThemeClassBgBody = initTheme
  const addNameTheme = initTheme === 'whiteTheme' ? 'Темная тема' : 'Светлая тема'

   const toggleTheme = () => {
     setLogo(!logo)
     const newTheme = initTheme === 'whiteTheme' ? 'darkTheme' : 'whiteTheme';
     setInitTheme(newTheme);
     localStorage.setItem('theme', newTheme); 
     setLogo(newTheme === 'darkTheme')
    }

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
 
      if (savedTheme) {
        setInitTheme(savedTheme);
        setLogo(savedTheme === 'darkTheme')
      }
    }, []);

    const logoImg = logo ? sunLogo : moonLogo

    return ( 
        <div className={addThemeClassBgBody}>
          
      <header>

        <div className="flex-head">
          <div className="navbar-btn">
          <div className="hamburger-button-container">
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={() => setIsOpen(!isOpen)}
              width={40}
              height={30}
              strokeWidth={0}
              rotate={0}  
              color='green'
              borderRadius={0}
              animationDuration={0.5}
            />
        </div>
        </div>

        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
          <button className="close-button" onClick={() => setIsOpen(false)}>
          ×
           </button>

            <div className='changeTh-btn-nav'>
              <img className='logoTh-Changed' src={logoImg} alt="logoTh" width='20'/> 
              <button id="changeTheme-button-Changed" onClick={toggleTheme}>{addNameTheme}</button>
            </div>

            <a href="google.com" className='flex-nav-png'>
              <img src={backetPng} alt="heart" width='25' />
              <p className='btnHamburg'>Корзина</p>
            </a>

            <a href="google.com" className='flex-nav-png'>
              <img src={heartPng} alt="heart" width='25' />
              <p className='btnHamburg'>Избранное</p>
            </a>

            <a href="google.com" className='flex-nav-png'>
              <img src={servicesPng} alt="heart" width='25' />  
              <p className='btnHamburg'>Услуги</p>
            </a>

            <a href="google.com" className='flex-nav-png'>
              <p className='btnHamburg'>Каталог</p>
            </a>

            <a href="google.com" className='flex-nav-png'>
              <p className='btnHamburg'>Доставка и оплата</p>
            </a>

            <a href="google.com" className='flex-nav-png'>
              <p className='btnHamburg'>О нас</p>
            </a>

            <a href="google.com" className='flex-nav-png'>
              <p className='btnHamburg'>Контакты</p>
            </a>

            

            

          </ul>
      </div>
          <a href="google.com">
            <img src={logoImage} alt="logo" width="100" className='logo' />
          </a>
          <button className="btn-nav"><p className='btn-text-nav'>Доставка и оплата</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>О нас</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>Контакты</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>Каталог</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>Услуги</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>Корзина</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>Избранное</p></button>

          <img className='logoTh' src={logoImg} alt="logoTh" /> 
          <button id="changeTheme-button" onClick={toggleTheme}>{addNameTheme}</button>

        </div>
      </header>

      <section className='bodyContent'>
        <div className="catalog-flex">
          <div className='catalog'>
            <h3 className='h3-catalog'>Каталог</h3>

            <button className="btn-catalog">
              <img src={laptopImage} alt="laptopImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Компьютеры и комплектующие</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img src={smartPhoneImage} alt="smartPhoneImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Смартфоны, планшеты</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img src={tvImage} alt="tvImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Телевизоры, видео-техника</p>
              </button>
            <br />

            <button className="btn-catalog">
              <img src={cameraImage} alt="cameraImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Цифровое фото и видео</p>
              </button>
            <br />

            <button className="btn-catalog">
              <img src={usbImage} alt="usbImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Сетевое оборудование</p>
              </button>
            <br />

            <button className="btn-catalog">
              <img src={processingImage} alt="processingImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Расходные материалы</p>
              </button>
            <br />

            <button className="btn-catalog">
              <img src={printerImage} alt="printerImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Офисная техника</p>
              </button>
            </div>

            <div className="interierPart">
              <img src={interier} alt="interier" />
              <div className="overlay">
                <h1 className='hello-text'>Магазин электронной техники - Partner's</h1>
                <p className='hello-text-p'>Мы имеем большой каталог электронной техники и не только.</p>
              </div>
            </div>
            
          </div>

          <h2 className='desc-flickity'>Топ наших товаров:</h2>

              <Carousel />
              <Carousel2 />
        
            <footer>
            Ⓒ Все права защищены
            </footer>
            
        </section>
        
      

    </div>
    )
}