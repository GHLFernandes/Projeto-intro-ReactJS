import React from "react";
import styled from "styled-components";

const StyledBanner = styled.header`
    background-color: #6278F7;
    text-align: center;
`;

const BannerImg = styled.img`
    max-width: 100%;
`;

const Banner = (props) => {
    return(
        <StyledBanner> 
            <BannerImg src={props.banner} alt="Banner principal da página do Organo"/>
        </StyledBanner>
    )
}

export default Banner;