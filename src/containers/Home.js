import React from "react";

import { useSelector } from "react-redux";
import ProductListing from "./ProductListing";
import { productsReducer } from "../redux/reducers/productsReducer";

const Home = () => {
  const products = useSelector((state) => state.productsReducer);
  return (
    <>
      <div className="ui fixed menu">
        <div className="ui container center">
          <ProductListing />
        </div>
      </div>
    </>
  );
};

export default Home;
