import React from 'react';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import header from '../../Assets/img/banners/header.png';

const Header = () => {
    return (
        <div>
            <img src={header} alt="headerImg"></img>
            {/* <ShoppingCartIcon /> */}
        </div>
        
    );
}

export default Header;