import React, {Fragment} from 'react';
import {ProductData} from '../../Data/ProductsData';


const ListProducts = () => {
	const data = ProductData;	
	console.log(data)

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
				<h3>List Products</h3>
				<div>				
				{data && //&& para saber si existe
        data.map((item) => <div key={item.id}> <img src={item.image} alt="image"/> <h4>{item.product}</h4> {item.price} </div>)}

				</div>
						
			</Fragment>
        
			
    )
};

export default ListProducts;