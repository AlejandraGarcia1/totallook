import React, { Fragment} from "react";
import { ProductData } from "../../Data/ProductsData";
import { Link } from "react-router-dom";
import Accesories from "../../Assets/img/category/accesorios.png";
import Shoes from "../../Assets/img/category/zapatos.png";
import Clothes from "../../Assets/img/category/ropa.png";
import Kids from "../../Assets/img/category/ninos.png";
import Return from "../../Assets/img/return.png";

import "./Categories.css";

const Categories = () => {
  const data = ProductData;
  console.log("categorias", data.category);

  return (
    <Fragment>
		<h2>CATEGORIA</h2>
		<hr></hr>
      
        <Link to="/">
          <img src={Return} alt="Accesories" className="btnReturn"></img>
        </Link>
        <Link to="/" className="return"></Link>
        {/* <p>Botones</p>	 */}
        <div className="boxCategories">
          <img src={Accesories} alt="Accesories" className="btn"></img>
          <img src={Shoes} alt="Accesories" className="btn"></img>

          <Link to="/listproducts">
            <img src={Clothes} alt="Accesories" className="btn"></img>
          </Link>

          <img src={Kids} alt="Accesories" className="btn"></img>
          {/* <img src={Accesories} alt="Accesories" className="btn"></img>
        <img src={Shoes} alt="Accesories" className="btn"></img> */}
        </div>


      {/* {data && //&& para saber si existe
        data.map((item) => <li key={item.id}> {item.category} </li>)}		
				{data.category} */}
    </Fragment>
  );
};

export default Categories;
