import React, { useState, useEffect } from 'react';
import TechImg from '../images/techimg.jpeg';
import styled from 'styled-components';
import BannerImg from '../components/BannerImg.jsx';
import cylinderimg from '../images/cylinder.png';
import { Link, navigate } from '@reach/router';
import catalogue from '../documents/CatalogDraft.pdf';

const Wrapper = styled.div`
    margin-top: 70px;
`;

const CylinderImg = styled.img`
    margin-left: 25%;
    margin-top: 20px;
    margin-bottom: 1.5%;
    height: 250px;
    height: 250px;
`;

const DescriptionWrapper = styled.div`
    height: 50%;
    width: 100%;
    border-top: 0.5px solid #9B9B9B;
    padding-bottom: 10%;
`;

const Description = styled.div`
    padding-top: 10px;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 1.5%;
`;
const Heading = styled.div`
    margin-top: 5%;
    margin-left: 10%;
    font-weight: bold;
    font-size: 27.5px;
    color: #116149;
`;

const Catalogue = styled.a`
    margin-left: 10%;
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 17px;

    :hover {
        text-decoration: underline;
    }
`;



const ProductType = (props) => {

    return (
        <Wrapper>
            <CylinderImg src={cylinderimg} />
            <DescriptionWrapper>
                <Heading>Cylinders/Other</Heading>
                <Description>
                Air & Automation offer this range of Pneumatic Cylinders 
                called the 'P95' series which is available in bore sizes 
                from 1-1/2" to 12". These heavy duty Australian made cylinders 
                are manufactured to the highest quality conforming to NFPA style, 
                which is optional or Airmation style which is standard. 
                For more information including ordering code, bore sizes, piston rod end styles, 
                function, mounting types and accessories refer to pages 18 through to 32 of our 
                catalogue which is available on this website (see Homepage). 
                </Description>
                <Catalogue 
                    href={catalogue}
                    target="_blank"
                > View our catalogue here</Catalogue>
            </DescriptionWrapper>
        </Wrapper>
    )

}

export default ProductType;