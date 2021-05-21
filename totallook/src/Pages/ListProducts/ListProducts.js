import React, {Fragment} from 'react';
// import {ProductData} from '../../Data/ProductsData';



const ListProducts = ({getBolsas}) => {
	// const data = ProductData
	console.log(getBolsas)

    return (
			<Fragment>
				<h3>List Products</h3>				
				{/* {data && //&& para saber si existe
        data.map((item) => <li key={item.id}> {item.product} </li>)}				 */}
			</Fragment>
        
			
    )
};

export default ListProducts;