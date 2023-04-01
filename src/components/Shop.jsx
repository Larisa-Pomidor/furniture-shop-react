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

import products_data from '../assets/data/products.json';

import sprite from '../assets/img/ico-sprite.svg';

const Shop = () => {
    const currency = 'грн.'
    const products = products_data.products.slice(0);
    const [filteredProducts, setFilteredProducts] = useState(products_data.products.slice(0));

    const [category, setCategory] = useState(
        [{
            "id": 1, "name": 'Декор', "checked": true, "amount": products.reduce(
                (acc, cur) => cur.category.id == 1 ? acc + 1 : 0,
                0
            )
        },
        {
            "id": 2, "name": 'Мебель', "checked": true, "amount": products.reduce(
                (acc, cur) => cur.category.id == 2 ? acc + 1 : 0,
                0
            )
        },
        {
            "id": 3, "name": 'Освещение', "checked": true, "amount": products.reduce(
                (acc, cur) => cur.category.id == 3 ? acc + 1 : 0,
                0
            )
        }]);

    const [sliderPrice, setSliderPrice] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [sort, setSort] = useState('');

    const [priceBound, setPriceBound] = useState([]);

    let tempPrice = sliderPrice
    let tempMatch = searchValue

    const handleSliderChange = (value) => {
        tempPrice = value.target.value;
        setSliderPrice(tempPrice);
        globalFilter();
    };

    const globalFilter = () => {
        let filtered = products.slice(0).filter(item => item.price >= tempPrice[0] && item.price <= tempPrice[1]);
        filtered = filtered
            .slice(0)
            .filter(item =>
                item.name.toLowerCase().includes(tempMatch.toLowerCase()) ||
                item.description.toLowerCase().includes(tempMatch.toLowerCase())
            )

        filtered = filtered
            .slice(0)
            .filter(item => category.find(cat => cat.id == item.category.id).checked == true)

        setFilteredProducts(filtered);
    }

    const handleSearchChange = (value) => {
        tempMatch = value.target.value;
        setSearchValue(tempMatch);
        globalFilter();
    };

    const handleChangeCheck = (value, id) => {
        let categoryChanged = category.slice(0)
        categoryChanged.forEach(element => {
            if (element.id === id) element.checked = value.target.checked;
        });
        setCategory(categoryChanged);
        globalFilter();
    };

    const handleChangeSort = (value) => {
        let sortType = value.target.value;
        setSort(sortType);
        if (sortType == 1) {
            let filtered = filteredProducts.slice(0).sort((a, b) => {
                return b.price - a.price;
            });
            setFilteredProducts(filtered);
        }

        else if (sortType == 2) {
            let filtered = filteredProducts.slice(0).sort((a, b) => {
                return a.price - b.price;
            });
            setFilteredProducts(filtered);
        }
    };

    useEffect(() => {
        const max = Math.max(...filteredProducts.map(item => item.price))
        const min = Math.min(...filteredProducts.map(item => item.price))
        setPriceBound([min, max])
        setSliderPrice([min, max])
        tempPrice = [min, max]

        globalFilter();
    }, []);

    return (
        <div className="main main-shop">
            <Container>
                <div className="main__shop-block">
                    <div className="sidebar">
                        <div className="sidebar__inner">
                            <div className="sidebar__reset">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use href={sprite + "#reset"} />
                                </svg>
                            </div>
                            <div className="sidebar__block">
                                <div className="sidebar__search">
                                    <TextField id="standard-basic" className="w-100" label="Поиск" variant="standard"
                                        value={searchValue} onChange={handleSearchChange} />
                                </div>
                            </div>
                            <div className="sidebar__block">
                                <div className="sidebar__name">
                                    Фильтр по цене
                                </div>
                                <div className="sidebar__price">
                                    ( от {sliderPrice[0] + " " + currency} до {sliderPrice[1] + " " + currency} )
                                </div>
                                <div className="sidebar__slider">
                                    <Slider
                                        value={sliderPrice}
                                        onChange={handleSliderChange}
                                        valueLabelDisplay="auto"
                                        min={priceBound[0]}
                                        max={priceBound[1]}
                                    />
                                </div>
                            </div>
                            <div className="sidebar__block sidebar__block_category">
                                <div className="sidebar__name">
                                    Категории
                                </div>
                                <div className="sidebar__category-list">
                                    {
                                        category.map((cat) =>
                                            <div className="sidebar__category-item" key={cat.id}>
                                                <div className="sidebar__category-name">
                                                    <FormControlLabel control={<Checkbox
                                                        checked={cat.checked}
                                                        onChange={(event) => handleChangeCheck(event, cat.id)}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                    />} label={cat.name} />
                                                </div>
                                                <div className="sidebar__category-amount">
                                                    ({cat.amount})
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop">
                        <div className="shop__inner">
                            <div className="shop__controll">
                                <div className="shop__show">
                                    Показано 12 результатов из 35
                                </div>
                                <div className="shop__sort">
                                    <FormControl className="shop__sort-form">
                                        <InputLabel>Сортировка</InputLabel>
                                        <Select
                                            checked={0}
                                            onChange={handleChangeSort}
                                            label="Сортировка"
                                            value={sort}
                                        >
                                            <MenuItem value={1}>По цене вниз</MenuItem>
                                            <MenuItem value={2}>По цене вверх</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="shop__list">
                                {
                                    filteredProducts.map((item, key) =>
                                        <div className="shop__item" key={key}>
                                            <div className="shop__label shop__label_sale">{item.label}</div>
                                            <div className="shop__favorite">
                                                <svg width="24" height="24" viewBox="0 0 24 24">
                                                    <use href={sprite + "#heart"} />
                                                </svg>
                                            </div>
                                            <div className="shop__image">
                                                <img src={"./" + item.image} alt="" />
                                            </div>
                                            <div className="shop__data">
                                                <div className="shop__data-text">
                                                    <div className="shop__data-name">
                                                        {item.name}
                                                    </div>
                                                    <div className="shop__data-price">
                                                        {item.price + " " + currency}
                                                    </div>
                                                </div>
                                                <div className="shop__cart">
                                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                                        <use href={sprite + "#bag"} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="shop__pages">
                                <div className="shop__pages-item">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Shop;