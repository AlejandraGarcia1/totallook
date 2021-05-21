import React, {Fragment} from 'react';
import {ProductData} from '../../Data/ProductsData';
import Stars from '../../Assets/clothes/stars.png'
import './ListProducts.css'



const ListProducts = () => {
	const data = ProductData;	
	


    return (
			<Fragment>
				<h3>List Products</h3>
				<div>				
				{data && 
       		 data.map((item) => 
						<div key={item.id}>							
						<img src={item.image} alt="image" />						
						<p className="product">{item.product}</p>						
						<p className="price">${item.price}</p> 
						<img src={Stars} alt="stars" className="stars"/>						
						</div>)}
				</div>						
			</Fragment>
        
			
    )
};

export default ListProducts;