import React, {Fragment, useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Home = () => {

	const [clothes, setClothes] = useState([]);

  const getData = async () => {
    const data = await fetch("http://localhost:3001/products");
    const dataJson = await data.json();
    console.log(dataJson);
    setClothes(dataJson);
  };

  useEffect(() => {
    getData();
  }, []);

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