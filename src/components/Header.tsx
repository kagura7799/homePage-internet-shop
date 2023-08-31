import React from "react";
import { useEffect, useState } from "react";

import HamburgerMenu from 'react-hamburger-menu';

import '../styles/style.css'

import logoImage from '../images/logo-partners.png'; 
import moonLogo from '../images/half-moon.png';
import sunLogo from '../images/contrast.png';
import heartPng from '../images/heart.png'
import servicesPng from '../images/vehicle.png'
import backetPng from '../images/shopping-online.png'


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [initTheme, setInitTheme] = useState(localStorage.getItem('theme') || 'whiteTheme');
  const [logo, setLogo] = useState(initTheme === 'whiteTheme')


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
        </div>
    )
}


