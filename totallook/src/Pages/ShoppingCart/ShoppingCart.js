import React, { Fragment } from "react";
import header from "../../Assets/img/banners/header2.png";
import cartProduct from "../../Assets/img/banners/cartProduct.png";
import { Link } from "react-router-dom";
import Return from "../../Assets/img/return.png";
import "./ShoppingCart.css";
import DraggableDialog from "./Modal";
const Shopping = () => {
  //   const handleOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  return (
    <Fragment>
      <img src={header} alt="headerImg"></img>
      <Link to="/listproducts">
        <img src={Return} alt="Product" className="btnReturn"></img>
      </Link>
      <h2>MI CARRITO DE COMPRAS</h2>
      <hr />
      <img src={cartProduct} alt="cardImg" className="cartProduct"></img>
      <p className="total">TOTAL: $300 MXN</p>
      <DraggableDialog />
      <br />
    </Fragment>
  );
};
export default Shopping;
