import { React, useState, useEffect } from 'react';

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Product from './components/Product.jsx'
import Favorite from './components/Favorite.jsx'
import Cart from './components/Cart.jsx'
import Footer from './components/Footer.jsx'
import { FavoriteContext, CartContext } from "./Helper/Context.js"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

const App = () => {

  const [favoriteLength, setFavoriteLength] = useState(0);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem('favorite')) localStorage.setItem("favorite", JSON.stringify([]));
    if (!localStorage.getItem('cart')) localStorage.setItem("cart", JSON.stringify([]));

    setFavoriteLength(JSON.parse(localStorage.getItem('favorite')).length);
    setCartLength(JSON.parse(localStorage.getItem('cart')).length);
}, [favoriteLength, cartLength]);

  return (
    <CartContext.Provider value={{ cartLength, setCartLength }}>
      <FavoriteContext.Provider value={{ favoriteLength, setFavoriteLength }}>
        <ThemeProvider theme={theme}>
          <Router>
            <header>
              <Header />
            </header>

            <main >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/#about" element={<Header />} />
                <Route path="/product" element={<Product />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <footer>
              <Footer />
            </footer>
          </Router>
        </ThemeProvider>
      </FavoriteContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
