import React from 'react';
import './style.css';

const Footer = () => {
    return(
        <div className="footerSection">
        
            <div className="icon"> 
               <a href="#"> <i className="fa fa-facebook"></i> </a>
               <a href="#"> <i className="fa fa-instagram"> </i> </a>
               <a href="#"> <i className="fa fa-twitter"> </i> </a>
               <a href="#"> <i className="fa fa-youtube"> </i> </a>
            </div>

            <div className="information">
                <a href="#" className="email"> <span> Email : </span> yousefmogshallah33@gmail.com </a> <br/>
                <a href="#" className="number"> <span> Phone Number : </span> +792598336147 </a>

            </div>


        </div>
    )
}
export default Footer;