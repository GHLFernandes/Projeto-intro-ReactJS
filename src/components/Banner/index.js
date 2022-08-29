import React from "react";
import './Banner.css';

const Banner = (props) => {
    return(
        <header className="banner"> 
            <img src={props.banner} alt="Banner principal da página do Organo"/>
        </header>
    )
}

export default Banner;