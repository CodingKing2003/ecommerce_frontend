import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";

import MetaData from "../MetaData";
import { getProduct } from "../../redux/actions/productActions";

import {useDispatch,useSelector} from 'react-redux'
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { clearErrors } from "../../redux/actions/productActions";
import ProductCard from "./ProductCard";






const Home = () => {
  const dispatch=useDispatch();
  const {loading,error,products}=useSelector((state)=>state.products);
  const alert=useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error,alert]);
  return (
    <Fragment>
      {
        loading?<Loader />:
        <Fragment>
      <MetaData title={"Ecommerce"}/>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        {
         products && products.map((product)=>(
          <ProductCard product={product} key={product._id} />
         ))
        }
       
      </div>
    </Fragment>
      }
    </Fragment>
  );
};

export default Home;