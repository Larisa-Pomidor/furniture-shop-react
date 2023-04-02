import { React, useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';

import sprite from '../assets/img/ico-sprite.svg';

const Header = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = () => {
        window.scrollY > 20 ? setScrollTop(1) : setScrollTop(0)
    }

    useEffect(() => {
        if (window.scrollY > 20) setScrollTop(1);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar bg="light" expand="lg" className={"w-100 position-fixed " + (scrollTop == 1 ? 'active' : '')} >
            <Container>
                <Navbar.Brand><Link to="/" >Vivo Furniture</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="gap-5 mx-auto">
                        <Link to="/" >Главная</Link>
                        <Link to="/#about" >О нас</Link>
                        <Link to="/shop" >Магазин</Link>
                        <Link to="/#action" >Акции🔥</Link>
                        <Link to="/#contacts" >Контакты</Link>
                    </Nav>
                    <Stack className="header__controll ms-5" direction="horizontal" gap={4}>
                        <div className="header__controll-item header__controll-item_account">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <use href={sprite + "#account"} />
                            </svg>
                        </div>
                        <Link to="/cart" >
                            <div className="header__controll-item header__controll-item_cart">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use href={sprite + "#cart"} />
                                </svg>
                                <div className="header__cart-number">
                                    0
                                </div>
                            </div>
                        </Link>
                        <Link to="/favorite" >
                            <div className="header__controll-item header__controll-item_favorite">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use href={sprite + "#heart"} />
                                </svg>
                            </div>
                        </Link>
                    </Stack>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;