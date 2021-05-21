import React, {Fragment, useState} from 'react';
import {ProductData} from '../../Data/ProductsData';
import { Link } from "react-router-dom";

const Categories = () => {
	const data = ProductData;
	console.log('categorias',data.category)
		
		

    return (
			<Fragment>
			<h3>Categorías</h3>		
			<p>Botones</p>	

			<button>Bolsas</button>
			<button>Zapatos</button>
			<button>
				<Link to="/listproducts" >Ropa </Link>
				
			</button>
			


			{/* {data && //&& para saber si existe
        data.map((item) => <li key={item.id}> {item.category} </li>)}		
				{data.category} */}

			
		
			
			
		</Fragment>
    )
}; 

export default Categories;