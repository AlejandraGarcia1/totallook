import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const data = await fetch("http://localhost:3001/products");
    const dataJson = await data.json();
    console.log(dataJson);

    setProducts(dataJson);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <h3>Hola Andy</h3>
      <Link to="/categories">
        <p>Mostrar todas las categorías</p>
      </Link>
      {/* {products.map((item) => {
        <li key={products.id}> {item.product} </li>;
      })} */}
      {products && //&& para saber si existe
        products.map((item) => <li key={item.id}> {item.product} </li>)}
    </Fragment>
  );
};

export default Home;
