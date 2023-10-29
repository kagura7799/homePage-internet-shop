import React, { FC } from "react";
import { useEffect, useState } from "react";

import HamburgerMenu from "react-hamburger-menu";
import { Link } from 'react-router-dom'
import "../styles/homeStyle.css";

import logoImage from "../images/logo-partners.png";
import moonLogo from "../images/half-moon.png";
import sunLogo from "../images/contrast.png";
import heartPng from "../images/heart.png";
import servicesPng from "../images/vehicle.png";
import backetPng from "../images/shopping-online.png";
import { useTheme } from "../hooks/theme";

type Props = {
  initTheme: string;
  handleChangeTheme: () => void;
};

const Header: FC<Props> = ({ initTheme, handleChangeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const thumbnailIcon = initTheme === "whiteTheme" ? moonLogo : sunLogo;
  const textTheme = initTheme === "whiteTheme" ? "Темная тема" : "Светлая тема";

  return (
    <div className={initTheme}>
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
                color="green"
                borderRadius={0}
                animationDuration={0.5}
              />
            </div>
          </div>

          <div
          className={`menu ${isOpen ? "open" : ""}`}
          >
            <ul>
              <button className="close-button" onClick={() => setIsOpen(false)}>
                ×
              </button>

              <div className="changeTh-btn-nav">
                <img
                  className="logoTh-Changed"
                  src={thumbnailIcon}
                  alt="logoTh"
                  width="20"
                />
                <button
                  id="changeTheme-button-Changed"
                  onClick={handleChangeTheme}
                >
                  {textTheme}
                </button>
              </div>

              <a href="#" className="flex-nav-png">
                <img src={backetPng} alt="heart" width="25" />
                <p className="btnHamburg">Корзина</p>
              </a>

              <a href="#" className="flex-nav-png">
                <img src={heartPng} alt="heart" width="25" />
                <p className="btnHamburg">Избранное</p>
              </a>

              <a href="#" className="flex-nav-png">
                <img src={servicesPng} alt="heart" width="25" />
                <p className="btnHamburg">Услуги</p>
              </a>

              <a href="#" className="flex-nav-png">
                <p className="btnHamburg">Каталог</p>
              </a>
            </ul>
          </div>
          <Link to='/homePage'>
            <img src={logoImage} alt="logo" width="100" className="logo" />
          </Link>


          <div className="dropdown">
            <button className="btn-nav">
              <Link to='/catalog'>
                <p className="btn-text-nav">Каталог</p>
              </Link>
            </button>
            <div className="dropdown-content-catalog">
              <ul>
                <li>
                  <Link to=''>Телефоны</Link>
                </li>

                <li>
                  <Link to=''>Компьютеры и комплектующие</Link>
                </li>

                <li>
                  <Link to=''>Смартфоны, планшеты</Link>
                </li>

                <li>
                  <Link to=''>Телевизоры, видео-техника</Link>
                </li>

                <li>
                  <Link to=''>Цифровое фото и видео</Link>
                </li>

                <li>
                  <Link to=''>Сетевое оборудование</Link>
                </li>

                <li>
                  <Link to=''>Расходные материалы</Link>
                </li>

                <li>
                  <Link to=''>Офисная техника</Link>
                </li>

              </ul>

            </div>
          </div>


          <button className="btn-nav">
            <p className="btn-text-nav" id='services-btn'>
              <Link to='/services'>Услуги</Link>
            </p>
          </button>
          <button className="btn-nav">
            <p className="btn-text-nav">Корзина</p>
          </button>
          <button className="btn-nav">
            <p className="btn-text-nav">Избранное</p>
          </button>

          <img className="logoTh" src={thumbnailIcon} alt="logoTh" />
          <button id="changeTheme-button" onClick={handleChangeTheme}>
            {textTheme}
          </button>

          </div>
        </header>
      </div>

  );
};

export default Header;
