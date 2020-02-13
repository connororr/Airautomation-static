import React, { useState } from "react";
import styled from 'styled-components';
import { Link, navigate } from '@reach/router';

const Wrapper = styled(Link)`
    width: 350px;
    height: 69px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    border-left: 4px solid transparent;
    padding-left: 15px;
    :hover {
        border-left: 4px solid #116149; 
    }
    padding-top: 10px;
`;
const Title = styled.div`
    font-size: 17.5px;
    font-weight: bold;
    width: 100%;

`;
const Description = styled.div`
    color: #798186;
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    font-family: Akzidenz Grotesk BQ Light,Helvetica,Arial;
    padding-top: 2.5px;
`;

const MenuButton = props => {

    return (
        <Wrapper to={props.link}>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </Wrapper>
    )
}
export default MenuButton;