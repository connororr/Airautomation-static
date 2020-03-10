import React, { useState } from 'react';
import styled from 'styled-components';
import BannerImg from '../components/BannerImg.jsx';
import MiningImg from '../images/mining.jpeg'
import catalogue from '../documents/CatalogDraft.pdf';
import pilot from '../images/pilot.png';
import RelatedProduct from '../components/RelatedProduct.jsx';

const Wrapper = styled.div`
    margin-top: 70px;
`;

const DescriptionWrapper = styled.div`
    height: 50%;
    width: 100%;
    padding-bottom: 5%;
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

const SmallerHeading = styled.div`
    font-weight: bold;
    font-size: 22.5px;
    color: #116149;
`;

const ProductsWrapper = styled.div`
    width: 94%;
    margin: 0 0 3% 3%;
    height: 50%;
    border-top: 0.5px solid #9B9B9B;
`;

const HeadingsBar = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Catalogue = styled.a`
    margin-left: 10%;
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 21.5px;
    :hover {
        text-decoration: underline;
    }
`;

const Products = styled.div`
    width: 85%;
    margin: 5% 0 7.5% 7.5%;
`;


const Industry = (props) => {
    return (
        <Wrapper>
            <BannerImg img={props.bannerimg}/>

            <DescriptionWrapper>
                <Heading>{props.title}</Heading>
                <Description>
                {props.description}
                </Description>
            </DescriptionWrapper>
            <ProductsWrapper>
                <HeadingsBar>
                    <SmallerHeading>Specific Products</SmallerHeading>
                    <Catalogue 
                     href={catalogue}
                     target="_blank"
                    > See our catalog</Catalogue>
                </HeadingsBar>
                <Products>
                    {props.relatedproducts.map((rp) => <RelatedProduct img={rp.img} title={rp.title} info={rp.info}/>)}
                </Products>
            </ProductsWrapper>
        </Wrapper>
    );
}
export default Industry;
