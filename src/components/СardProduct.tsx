import React, {useEffect, useState} from 'react';
import iphone from '../images/iphone-15-redac.png'

const СardProduct = () => {

    return (
            <div className="product-container">
                <div className="img-product">
                    <img src={iphone} alt="img-product"  width={250}/>
                    <span className="price">300.000 T</span>
                    <h2 className="title-product">Iphone 15</h2>
                </div>
            </div>
    )
}

export default СardProduct;
