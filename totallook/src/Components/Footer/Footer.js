import React from 'react';
import './Footer.css'
import footer from '../../Assets/img/banners/footer.png'

const Footer = () => {
    return (
        <div className="footer">
         <img src={footer} alt="footerImg"></img>
        </div>
        
    );
}

export default Footer;