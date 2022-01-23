import React from "react";
import ProductListing from "./containers/ProductListing";
import Home from "./containers/Home";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormAuth from "./containers/FormAuth";
import Navbar from "./containers/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<FormAuth />} />

          <Route path="/home" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/" exact element={<ProductListing />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
