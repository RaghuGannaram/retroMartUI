import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import Home from "../screens/Home";
import Auth from "../screens/Auth";
import Cart from "../screens/Cart";
import Product from "../screens/Product";

function RouterConfiguration() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default RouterConfiguration;
