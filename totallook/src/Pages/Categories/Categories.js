import React, {Fragment} from 'react';
import {ProductData} from '../../Data/ProductsData';
import { Link } from "react-router-dom";

const Categories = () => {
	const data = ProductData;
	console.log('categorias',data)

		const getBolsas = (data) => {
			console.log(data)
				// data.map((item) => <li key={item.id}> {item.category === "bolsas"}</li>)			
		}
		

    return (
			<Fragment>
			<h3>Categorías</h3>		
			<p>Botones</p>	

			<button>Ropa</button>
			<button>Zapatos</button>
			<button>
				<Link to="/listproducts" onClick={getBolsas} >Bolsas </Link>
			</button>
			


			{/* {data && //&& para saber si existe
        data.map((item) => <li key={item.id}> {item.category} </li>)}		
				{data.category} */}

			
		
			
			
		</Fragment>
    )
}; 

export default Categories;