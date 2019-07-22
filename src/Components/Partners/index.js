import React from 'react';
import './style.css';
const Partners = () => {
    return(
        <div className="PartnerSection">
            <div className="imgMeeting">
                <img src="./images/meeting.jpg" />
            </div>
            <div className="tittleMeeting"> 
                <h3> How To Become A Partner With Us </h3>
                <div className="itemPartner">  
                    <i className="fa fa-check"></i>
                    <p> Send name & name company </p>
                </div>

                <div className="itemPartner">  
                    <i className="fa fa-check"></i>
                    <p> Send Serves Count </p>
                </div>

                <div className="itemPartner">  
                    <i className="fa fa-check"></i>
                    <p> Send company Number in city </p>
                </div>

                <div className="itemPartner">  
                    <i className="fa fa-check"></i>
                    <p> Send Mobile number </p>
                </div>
               
            </div>
        </div>
    )
}
export default Partners;