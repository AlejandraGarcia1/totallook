import React, {Fragment} from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
			<Fragment>
				<h3>Hola Andy</h3>
				<Link to="/categories">
					<p>Mostrar todas las categorías</p>	
				</Link>	
			</Fragment>

        

    )

};

export default Home;