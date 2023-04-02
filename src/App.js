import { React } from 'react';

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Product from './components/Product.jsx'
import Footer from './components/Footer.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
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

  return (
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
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
