import React from "react";
import MockupImg from '../assets/img/iPhone_Mockup.png'

function Mockup(){
    return(
        <div className="col-12 col-lg-6  bg-primary text-white text-center pt-5">
            <h2>Gradie</h2>
            <p className="text-light">Beautiful gradients in seconds</p>
            <img className="w-75 mt-5" src={MockupImg}/>
        </div>
    )
}
export default Mockup