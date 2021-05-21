import React, {Fragment, useState} from 'react';
import {ProductData} from '../../Data/ProductsData';
import { Link } from "react-router-dom";

const Categories = () => {
	const data = ProductData;
	console.log('categorias',data.category)

		const [dataFiltrada, setDataFiltrada] = useState([])

		const getBolsas = (e) => {			
			const data = ProductData;
			
			console.log(e)
			console.log('categorias',data)
			if(e.target.innerText === "Bolsas" ){
				setDataFiltrada(data.filter(category => category.category === "bolsas"))
			}else if(e.target.innerText === "Zapatos"){
				setDataFiltrada(data.filter(category => category.category === "zapatos"))
			}else if(e.target.innerText === "Ropa"){
				setDataFiltrada(data.filter(category => category.category === "ropa"))
			}
			console.log(setDataFiltrada)
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
				{
					data.map((item) => <li key={item.id}> {item.category === "bolsas"}</li>)	
				}
			</button>
			


			{/* {data && //&& para saber si existe
        data.map((item) => <li key={item.id}> {item.category} </li>)}		
				{data.category} */}

			
		
			
			
		</Fragment>
    )
}; 

export default Categories;