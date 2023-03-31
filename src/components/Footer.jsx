import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Stack';

import sprite from '../assets/img/ico-sprite.svg';

const Footer = () => (
    <div className="footer__outer">
        <Container>
            <div className="footer__inner">
                <Stack direction="horizontal" gap={5} className="align-items-start">
                    <Col>
                        <div className="logo">
                            Vivo Furniture
                        </div>
                        <div className="footer__desc">
                            <b>Vivo Furniture</b> - это магазин мебели,
                            который предлагает широкий выбор качественной и
                            стильной мебели для дома и офиса.
                        </div>
                        <Stack direction="horizontal" gap={3} className="socials mt-3">
                            <div className="socials-item">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use href={sprite + "#facebook"} />
                                </svg>
                            </div>
                            <div className="socials-item">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use href={sprite + "#twitter"} />
                                </svg>
                            </div>
                            <div className="socials-item">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use href={sprite + "#telegram"} />
                                </svg>
                            </div>
                            <div className="socials-item">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use href={sprite + "#instagram"} />
                                </svg>
                            </div>
                        </Stack>
                    </Col>
                    <Col>
                        <div className="footer__title">
                            Контакты
                        </div>
                        <div className="footer__list">
                            <div className="footer__item">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use href={sprite + "#location"} />
                                </svg>
                                улица Драгоманова, 2а
                            </div>
                            <div className="footer__item">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use href={sprite + "#phone"} />
                                </svg>
                                +380675642289
                            </div>
                            <div className="footer__item">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use href={sprite + "#mail"} />
                                </svg>
                                @VivoFurniture@studio.con
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer__title">
                            Подпишись на обновления
                        </div>
                        <Form className="position-relative">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Ваша почта" />
                                <Form.Text className="text-muted d-block mt-2">
                                    Мы не передаем данные третьим лицам
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="position-absolute form__button">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use href={sprite + "#form-button"} />
                                </svg>
                            </Button>
                        </Form>
                    </Col>
                </Stack>
            </div>
            <div className="footer__copy">
                This template is made with love by <span> LarisaPomidor.2SPL </span>
                <br /> Copyright @2023 All rights reserved
            </div>
        </Container>
    </div>
);

export default Footer;