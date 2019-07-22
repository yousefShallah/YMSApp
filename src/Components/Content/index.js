import React from 'react';
import './style.css';
const Content = () => {
    return(
        <div className="contentSection"> 
            <div className="inputs">
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Phone" />
                <input type="text" placeholder="Subject" />
                <input type="Email" placeholder="Email" />
                <textarea type="text" placeholder="Your Massege"> </textarea>
                <button>Send</button>
            </div>
            <div className="details">
                <p> <span>Phone :  </span><a href="#"> +972598336147 </a></p>
                <p> <span>Email : </span><a href="#"> yousefmohshallah33@gmail.com </a></p>
                <p> <span>Website : </span><a href="#"> www.yms.com </a></p>
            </div>
        </div>
    )
}
export default Content;