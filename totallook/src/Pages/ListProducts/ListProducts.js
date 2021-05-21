import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ProductData } from "../../Data/ProductsData";
import Stars from "../../Assets/clothes/stars.png";
import Return from '../../Assets/img/return.png';
import Ofert from "../../Assets/img/banners/ofert.png";

import "./ListProducts.css";

const ListProducts = () => {
  const data = ProductData;
  console.log(data);  

  return (
    <Fragment>
		<h2>LISTA DE PRODUCTOS</h2>
		<hr></hr>
      
        <Link to="/categories">
          <img src={Return} alt="Accesories" className="btnReturn"></img>
        </Link>

      <div className='products'>
        {data &&
          data.map((item) => (
            <div key={item.id} className='items'>
              <div className="boxItem">
							<Link to="/product">
                <img src={item.image} alt="img" className='itemImg'/>
              </Link>								 
								 <img src={Ofert} alt="ofert" className="ofert"></img> 
			 				 </div>        
                <p className="product">{item.product}</p>
                <p className="price">${item.price}</p>
                <img src={Stars} alt="stars" className="stars" />
              </div>            
          ))}
      </div>
    </Fragment>
  );
};

export default ListProducts;
