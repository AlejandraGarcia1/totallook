import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ProductData } from "../../Data/ProductsData";
import Stars from "../../Assets/clothes/stars.png";
import Return from "../../Assets/img/return.png";
import header from "../../Assets/img/banners/header_0.png";
import './Product.css'
import Redes from '../../Assets/img/banners/Redes.png'
import Hot from '../../Assets/img/banners/hot.png'
import ContIzq from '../../Assets/img/banners/contIzq.png'
import ContDer from '../../Assets/img/banners/contDer.png'


const Product = () => {
  const data = ProductData;
  let productId = data[0].id;

  const [contador, setContador] = useState(0);

  function sumar() {
    setContador(contador + 1);
  }

  function restar() {
    setContador(contador !== 0 ? contador - 1 : contador);
  }


  return (
    <Fragment>
      <img src={header} alt="headerImg"></img>
      <h2>PRODUCTO</h2>
      <hr></hr>

		<Link to="/listproducts">
          <img src={Return} alt="Accesories" className="btnReturn"></img>
        </Link>      
        
      <div className='products'>
				{data &&
					data.map((item) => {
					if(item.id === 1 ){
						return(
							<div key={item.id} >	
								<div>						
									<div className = "imagen">
										<img src={Redes} alt="product" ></img>								
									</div>
								</div>
								<div>
									<div className="hotOffert">
										<img src={Hot} alt="hot" ></img> 
									</div>
								</div>
								<div className="information">									
								<p className="producTitle">Producto: {item.product}</p>                
								<p className="">Descrpción: {item.descripcion}</p>
								<p className="">Color: {item.color}</p>
								<p className="">Talla: {item.size}</p>
                <p className="">Precio: ${item.price} MXN</p>
								</div>
								<div className="contador">						
									<img onClick = { restar } src = { ContIzq } alt = "izquierda" className = "izquierda"/>														
										<div className = "number"> { contador } </div>							
									<img onClick = { sumar } src = { ContDer } alt = "derecha" className = "derecha"/>
									<div className='btnAgregar'>
        					<Link to="/shoppingcart" style={{ textDecoration: 'none' }} >
        						  <p className="textCarrito">Agregar a mi carrito</p>
        					</Link>
      						</div>
								</div>
								<div className="puntuacion">							
                <img src={Stars} alt="stars" className="starsPuntuacion" />
								<Link to=""  style={{ color: 'black' }}>
									<p className="comentarios">ver comentarios</p>
									</Link>
								</div>
              </div>
						)

      <Link to="/listproducts">
        <img src={Return} alt="Accesories" className="btnReturn"></img>
      </Link>

      <div className="products">
        {data &&
          data.map((item) => {
            if (item.id === 1) {
              return (
                <div key={item.id} className="items">
                  <img src={item.image} alt="product"></img>
                  <p className="product">{item.product}</p>
                  <p className="price">{item.descripcion}</p>
                  <p className="price">{item.color}</p>
                  <p className="price">{item.size}</p>
                  <p className="price">${item.price}</p>
                  <button>
                    <img
                      onClick={restar}
                      src={""}
                      alt="izquierda"
                      className="izquierda"
                    />
                  </button>
                  <div className="number"> {contador} </div>
                  <button>
                    <img
                      onClick={sumar}
                      src={""}
                      alt="derecha"
                      className="derecha"
                    />
                  </button>

                  <img src={Stars} alt="stars" className="stars" />
                </div>
              );
            }
          })}
      </div>
    </Fragment>
  );
};

export default Product;
