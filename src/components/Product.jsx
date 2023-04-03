import { React, useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import { useLocation } from 'react-router-dom'
import { CartContext } from "../Helper/Context.js"

const Product = () => {
    const productData = useLocation()
    const { product } = productData.state
    const currency = "грн."

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const { cartLength, setCartLength } = useContext(CartContext);

    const [amount, setAmount] = useState(1);

    const addToCart = (item) => {
        const i = cart.findIndex(e => e.id === item.id);
        let tempCart = cart.slice(0)
        if (i > -1) {
            tempCart[i].qty = tempCart[i].qty + amount;
        }
        else {
            tempCart.push({
                id: item.id,
                name: item.name,
                qty: amount,
                price: item.price,
                image: item.image
            })
        }
        console.log(tempCart)
        setCart(tempCart);
        setCartLength(tempCart.length)
        localStorage.setItem("cart", JSON.stringify(tempCart))
    }

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
                                {product.price + " " + currency}
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
                                <div className="product__button" onClick={() => addToCart(product)}>
                                    Добавить в корзину
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