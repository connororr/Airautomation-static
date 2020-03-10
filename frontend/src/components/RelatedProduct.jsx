import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-top: 0.5px solid #9B9B9B;
    width: 100%;
    display: flex;
    justify-content: rows;
    padding-top: 1.5%;
    padding-bottom: 2.5%;
    border-bottom: 0.5px solid #9B9B9B;
    justify-content: space-between;
`;

const ProductContainer = styled.div`
    display: flex;
`;

const ProductImage = styled.img`
    height: 100%;
    width: 20%;
    margin-right: 2.5%;
    overflow: visible;
    position: centre;
    object-fit: cover;
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

const RelatedProduct = (props) => {

    return (
        <Wrapper>
            <ProductContainer>
                <ProductImage src={props.img}/>
                <ProductInfo>
                    <ProductTitle>{props.title}</ProductTitle>
                    <ProductDetail>
                        <ProductDetailPoint>{props.info}</ProductDetailPoint>
                    </ProductDetail>
                </ProductInfo>
            </ProductContainer>
            <ProductButton
                href=''
            > Enquire about this special product
            </ProductButton>
        </Wrapper>

    )
}
export default RelatedProduct;