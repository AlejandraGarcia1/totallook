import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ProductData } from "../../Data/ProductsData";
import Stars from "../../Assets/clothes/stars.png";
import Return from '../../Assets/img/return.png'

import "./ListProducts.css";

const ListProducts = () => {
  const data = ProductData;
  console.log(data);

  // const getRopa = (e) => {
  // 	const data = ProductData;
  // 	console.log(e)
  // 	console.log('categorias',data)
  // 	if(e.target.innerText === "Ropa" ){
  // 		return(data.filter(category => category.category === "ropa"))
  // 	}

  // }
  // const data = ProductData

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
				 <img src={item.image} alt="img" className='itemImg'/> 
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
