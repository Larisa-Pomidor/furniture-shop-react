import { React, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { useLocation } from 'react-router-dom'

import sprite from '../assets/img/ico-sprite.svg';

const Product = () => {
    const productData = useLocation()
    const { product } = productData.state
    const currency = "грн."

    const [amount, setAmount] = useState(1);
    return (
        <div className="product">
            <div className="product__outer">
                <Container>
                    <div className="product__block">
                        <div className="product__image">
                            <img src={"./products/" + product.image} alt="" />
                            <div className={"product__label " + (product.label === '' ? 'none' : '')}>
                                {product.label}
                            </div>
                        </div>
                        <div className="product__data">
                            <div className="product__title">
                                {product.name}
                            </div>
                            <div className="product__stars">
                                ★★★★★
                            </div>
                            <div className="product__price">
                                {product.price + " " + currency }
                            </div>
                            <div className="product__desc">
                                {product.description}
                            </div>
                            <div className="product__form">
                                <div className="product__counter">
                                    <div className="product__amount">
                                        {amount}
                                    </div>
                                    <div className="product__amount-controll">
                                        <div className="product__controll" onClick={() => setAmount(amount => amount + 1)}>
                                            +
                                        </div>
                                        <div className="product__controll" onClick={() => amount >= 2 ? setAmount(amount => amount - 1) : ''}>
                                            -
                                        </div>
                                    </div>
                                </div>
                                <div className="product__button">
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Product;