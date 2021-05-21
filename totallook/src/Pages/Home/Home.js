import React, { Fragment} from "react";
import { Link } from "react-router-dom";
import banner1 from '../../Assets/img/banners/banner_home1.png'
import banner2 from '../../Assets/img/banners/womenNewCollection.png'
import banner3 from '../../Assets/img/banners/menNewCollection.png'
import banner4 from '../../Assets/img/banners/ropaMujer.png'
import banner5 from '../../Assets/img/banners/zapatos.png'
import banner6 from '../../Assets/img/banners/bolsas.png'
import banner7 from '../../Assets/img/banners/greenBanner.png'
import title from '../../Assets/img/banners/totalGreen.png'
import './Home.css'

const Home = () => {
  

  return (
    <Fragment>
      <img src={banner1} alt='banner1Img' className="banner1"/>
      <div className="newCollection">
        <img src={banner2} alt='banner2Img' className="bannerchica"/>
        <img src={banner3} alt='banner3Img' className="bannerchico"/>
      </div>
      <div className='btnCategories'>
        <Link to="/categories" style={{ textDecoration: 'none' }} >
          <p>Mostrar todas las categorías</p>
        </Link>
      </div>
      <div className='sectionBanner'>
        <div className='banners'>
          <img src={title} alt='titleGreen' className='titleGreen'></img>
          <img src={banner7} alt='banner7Img'/>
        </div>
        <div className='banners'>
					<Link to="/listproducts">
						<img src={banner4} alt='banner4Img'/>	
					</Link>          
          <img src={banner5} alt='banner5Img'/>
          <img src={banner6} alt='banner6Img'/>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
