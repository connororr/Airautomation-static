import React, { useState } from 'react';
import styled from 'styled-components';

const Img = styled.img`
    height: 300px;
    width: 100%;
    overflow: hidden;
    position: centre;
    object-fit: cover;
`;

const BannerImg = (props) => {
    return (
        <Img src={props.img} />
    );
    
}

export default BannerImg;