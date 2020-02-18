import React, { useState } from 'react';
import styled from 'styled-components';
import BannerImg from '../components/BannerImg.jsx';
import MiningImg from '../images/mining.jpeg'
import catalogue from '../documents/CatalogDraft.pdf';
import pilot from '../images/pilot.png';

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

const Product = styled.div`
    border-top: 0.5px solid #9B9B9B;
    width: 100%;
    display: flex;
    justify-content: rows;
    padding-top: 1.5%;
    padding-bottom: 2.5%;
    border-bottom: 0.5px solid #9B9B9B;
    justify-content: space-between;
`;
const ProductImage = styled.img`
    height: 100%;
    width: 15%;
    margin-right: 2.5%;
`;

const ProductInfo = styled.div`
`;

const ProductDetail = styled.ul`
    padding-left: 0px;
    list-style: inside;
`;
const ProductDetailPoint = styled.li`
`;

const ProductTitle = styled.div`
    color: black;
    font-weight: bold;
    font-size: 16.5px;
`;

const ProductButton = styled.a`
    text-decoration: none;
    color: #13773D;
    font-weight: bold;

    :hover {
        color: black;
    }
`;

const ProductContainer = styled.div`
    display: flex;
`;

const Industry = (props) => {
    return (
        <Wrapper>
            <BannerImg img={MiningImg}/>

            <DescriptionWrapper>
                <Heading>Mining</Heading>
                <Description>
                Air & Automation offer this range of Pneumatic Cylinders 
                called the 'P95' series which is available in bore sizes 
                from 1-1/2" to 12". These heavy duty Australian made cylinders 
                are manufactured to the highest quality conforming to NFPA style, 
                which is optional or Airmation style which is standard. 
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
                    <Product>
                        <ProductContainer>
                            <ProductImage src={pilot}/>
                            <ProductInfo>
                                <ProductTitle>1" Pilot Operated Valve</ProductTitle>
                                <ProductDetail>
                                    <ProductDetailPoint>5/3 Port model</ProductDetailPoint>
                                </ProductDetail>
                            </ProductInfo>
                        </ProductContainer>
                        <ProductButton
                            href=''
                        > Enquire about this special product
                        </ProductButton>
                    </Product>
                </Products>
            </ProductsWrapper>
        </Wrapper>
    );
}
export default Industry;
