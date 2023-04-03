import { React, useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { CartContext } from "../Helper/Context.js"

const Cart = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const {cartLength, setCartLength} = useContext(CartContext);

    const currency = "грн."

    const removeItem = (id) => {
        let minCart = cart.filter(item => item.id != id);
        setCart(minCart)
        setCartLength(minCart.length)
        localStorage.setItem("cart", JSON.stringify(minCart))
    }

    const plusQty = (id) => {
        const i = cart.findIndex(e => e.id === id);
        let tempCart = cart.slice(0);
        tempCart[i].qty++;
        setCart(tempCart);
        localStorage.setItem("cart", JSON.stringify(tempCart))
    }

    const minusQty = (id) => {
        const i = cart.findIndex(e => e.id === id);
        let tempCart = cart.slice(0);
        tempCart[i].qty--;
        setCart(tempCart);
        localStorage.setItem("cart", JSON.stringify(tempCart))
    }

    return (
        <div className="cart">
            <div className="cart__outer">
                <div className="page-decor">
                    <Container>
                        <div className="page-decor__title">
                            Ваша корзина
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className="cart__list">
                        <div className="cart__header cart__row">
                            <div className="cart__col">

                            </div>
                            <div className="cart__col">
                                Товар
                            </div>
                            <div className="cart__col">
                                Цена
                            </div>
                            <div className="cart__col">
                                К-во
                            </div>
                            <div className="cart__col">
                                Сумма
                            </div>
                        </div>
                        {
                            cart.map((item) =>
                                <div className="cart__item cart__row" key={item.id}>
                                    <div className="cart__col cart__remove" onClick={() => removeItem(item.id)}>
                                        ✖
                                    </div>
                                    <div className="cart__col cart__name">
                                        <img src={"./products/" + item.image} alt="" /> {item.name}
                                    </div>
                                    <div className="cart__col">
                                        {item.price + " " + currency}
                                    </div>
                                    <div className="cart__col">
                                        <div className="cart__counter">
                                            <div className="cart__amount">
                                                {item.qty}
                                            </div>
                                            <div className="cart__amount-controll">
                                                <div className="cart__controll" onClick={() => plusQty(item.id)}>
                                                    +
                                                </div>
                                                <div className="cart__controll" onClick={item.qty > 1 ? () => minusQty(item.id) : null}>
                                                    -
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart__col cart__total">
                                        {item.qty * item.price + " " + currency}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="cart__checkout">
                        <div className="cart__subtotal">
                            Итоговая сумма: <span>{cart.reduce(
                                (acc, cur) => acc + cur.price * cur.qty,
                                0
                            ) + " " + currency}</span>
                        </div>
                        <div className="cart__button">
                            Перейти к оплате
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Cart;