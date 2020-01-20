import React, { useState } from 'react';
import styled from 'styled-components';

const Img = styled.img`
    height: 300px;
    width: 100%;
    overflow-y: hidden;
`;

const BannerImg = (img) => {
    return (
        <Img src={img} />
    );
    
}

export default BannerImg;