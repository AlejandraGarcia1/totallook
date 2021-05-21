import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ProductData } from "../../Data/ProductsData";
import Stars from "../../Assets/clothes/stars.png";
import Return from '../../Assets/img/return.png';
import './Product.css'

const Product = () => {
	const data = ProductData;
	let productId = data[0].id;

	const [contador, setContador] = useState(0);
	
	function sumar() {
		setContador(contador +1)
	}

	function restar() {
		setContador(contador !== 0 ? contador -1 : contador);
	}

	return (
    <Fragment>
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
							<div key={item.id} className='items'>							
								<div className = "imagen">
								<img src={item.image} alt="product" ></img>  
								</div>
								<p className="">{item.product}</p>                
								<p className="">{item.descripcion}</p>
								<p className="">{item.color}</p>
								<p className="">{item.size}</p>
                <p className="">${item.price}</p>
								<button>
									<img onClick = { restar } src = { '' } alt = "izquierda" className = "izquierda"/>
								</button>								
								<div className = "r"> { contador } </div>
								<button>
										<img onClick = { sumar } src = { '' } alt = "derecha" className = "derecha"/>	
								</button>
							
                <img src={Stars} alt="stars" className="stars" />
              </div>
						)

					}
				}
				)
			}

			
			

			
      </div>
    </Fragment>
  );
};




export default Product;