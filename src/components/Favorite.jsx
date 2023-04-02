import { React, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import sprite from '../assets/img/ico-sprite.svg';

const Favorite = () => {
    const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favorite')) || []);
    const [favoriteLength, setFavoriteLength] = useState(JSON.parse(localStorage.getItem('favorite-length')) || 0);

    const removeItem = (id) => {
        let minFavorite = favorite.filter(item => item.id != id);
        setFavorite(minFavorite)
        setFavoriteLength(minFavorite.length)
    }

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite))
        localStorage.setItem("favorite-length", JSON.stringify(favorite.length))
    }, [favoriteLength]);
    return (
        <div className="favorite">
            <div className="favorite__outer">
                <div className="page-decor">
                    <Container>
                        <div className="page-decor__title">
                            Виш-Лист
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className="favorite__list">
                        {
                            favorite.map((item) =>
                                <div className="favorite__item" key={item.id}>
                                    <div className="favorite__heart"
                                        onClick={() => removeItem(item.id)}>
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <use href={sprite + "#heart"} />
                                        </svg>
                                    </div>
                                    <div className="favorite__image">
                                        <img src={"./products/" + item.image} alt="" />
                                    </div>
                                    <div className="favorite__name">
                                        {item.name}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Favorite;