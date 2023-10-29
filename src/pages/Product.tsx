import React, { FC, useState } from "react";
import '../styles/productStyle.css';
import backetSvg from "../images/basket.svg";
import iphone from '../images/iphone-15-redac.png';
import { useTheme } from "../hooks/theme";
import Header from "../components/Header";


const Product = () => {
    const [isChangedTheme, setIsChangedTheme] = useState(false);
    const { initTheme, setInitTheme } = useTheme();
    const handleChangeTheme = () => {
        setIsChangedTheme(!isChangedTheme);
        setInitTheme(initTheme === "whiteTheme" ? "darkTheme" : "whiteTheme");
    };

    return (
        <div className={initTheme}>
        <Header initTheme={initTheme} handleChangeTheme={handleChangeTheme} />

            <div className="container-product">
                    <h1 className="title-product-card">Смартфон Apple iPhone 15 128Gb A3092 Черный</h1>
                    <hr className="line-product" />
                <div className="content-product-card">
                    <img src={iphone} alt="obogrev-img" width={350} className="photo-product"/>

                    <div className="character-product">
                      <h1>Характеристики </h1>
                      <div className="body-describe-product">
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>

                    <div className="right-panel-product">
                        <p className="placeholder-product">Цена (Костанай):</p>
                        <p className="price-product">300000 ₸</p>


                          <button className="buy-btn-product">Купить</button>
                          <button className="basket-btn-product">
                              <img src={backetSvg} alt="basket" width={30}/>
                                <span>В корзину</span>
                          </button>

                        </div>
                    </div>
                </div>
        </div>
    )

}

export default Product;