import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';
import ShopCateg from './Pages/ShopCateg';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSign from './Pages/LoginSign';
import Footer from './Components/Footer';
import menBanner from './Assets/banner_mens.png';
import womenBanner from './Assets/banner_women.png';
import kidBanner from './Assets/banner_kids.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCateg banner={menBanner} category="men" />} />
          <Route path="/womens" element={<ShopCateg banner={womenBanner} category="women" />} />
          <Route path="/kids" element={<ShopCateg banner={kidBanner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSign />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
