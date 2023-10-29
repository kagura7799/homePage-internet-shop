import React, { useState, useEffect } from 'react';
import { useTheme } from "../hooks/theme"; 

import moonLogo from "../images/half-moon.png";
import sunLogo from "../images/contrast.png";
import heartPng from "../images/heart.png";
import servicesPng from "../images/vehicle.png";
import backetPng from "../images/shopping-online.png";
import logoImage from "../images/logo-partners.png";

import СardProduct from "../components/СardProduct";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from 'react-router-dom' 
import '../styles/catalogStyle.css'
import Header from "../components/Header";
import axios from "axios";

interface Product {
  id: number,
  image: string,
  price: number,
  title: string,
}

export function Catalog() {

  const [isOpen, setIsOpen] = useState(false);
  const [isChangedTheme, setIsChangedTheme] = useState(false);
  const { initTheme, setInitTheme } = useTheme();
  const [value, setValue] = useState('');
  const [products, setProducts] = useState<Product[]>([])

  const url = 'https://fakestoreapi.com/products'

  useEffect(() => {
    axios.get(url)
        .then(res => setProducts(res.data))
  }, []);

  const handleChangeTheme = () => {
    setIsChangedTheme(!isChangedTheme);
    setInitTheme(initTheme === "whiteTheme" ? "darkTheme" : "whiteTheme");
  };

  // const searchProduct = products.filter(() => {

  // })


  const thumbnailIcon = initTheme === "whiteTheme" ? moonLogo : sunLogo;
  const textTheme = initTheme === "whiteTheme" ? "Темная тема" : "Светлая тема";


  return (
    <div className={initTheme}>
      <Header initTheme={initTheme} handleChangeTheme={handleChangeTheme} />
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

              <a href="google.com" className="flex-nav-png">
                <img src={backetPng} alt="heart" width="25" />
                <p className="btnHamburg">Корзина</p>
              </a>

              <a href="google.com" className="flex-nav-png">
                <img src={heartPng} alt="heart" width="25" />
                <p className="btnHamburg">Избранное</p>
              </a>

              <a href="google.com" className="flex-nav-png">
                <img src={servicesPng} alt="heart" width="25" />
                <p className="btnHamburg">Услуги</p>
              </a>

              <a href="google.com" className="flex-nav-png">
                <p className="btnHamburg">Каталог</p>
              </a>

              </ul>
          </div>
        </div>
        
        <div className="search-bar">
                <input 
                type="search" 
                placeholder="Найти товар"
                onChange={(event) => setValue(event.target.value)}
                />
        </div>
        
      </header>
        <div className="bodyContent">

            <section className="products-catalog">
              <Link to='/product'><СardProduct /></Link>
              <Link to='/product'><СardProduct /></Link>
              <Link to='/product'><СardProduct /></Link>
              <Link to='/product'><СardProduct /></Link>
              <Link to='/product'><СardProduct /></Link>
              <Link to='/product'><СardProduct /></Link>
              <Link to='/product'><СardProduct /></Link>
              <Link to='/product'><СardProduct /></Link>
              <Link to='/product'><СardProduct /></Link>
            </section>
            </div>

    </div>
  );
}
