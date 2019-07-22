import React from 'react';
import './style.css';
const Header = () => {
    return(
        <div className="headSection">
            <div className="appPicSection" > 
                <img src="./images/appPic.png" className="appPic" /> 
            </div> 

            <div className="aboutApp"> 
                <h2><span> Car </span>Here</h2>
                <p> It's company to sell and buy <span>Cars</span> anywhere & anytime . </p>
                <button className="btnDawnlode"> Dawnlode App </button> 
            </div>
        </div>
    )
}
export default Header;