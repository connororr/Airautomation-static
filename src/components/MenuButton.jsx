import React, { useState } from "react";
import styled from 'styled-components';
import { Link, navigate } from '@reach/router';

const Wrapper = styled(Link)`
    width: 350px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    border-left: 4px solid transparent;
    padding-left: 15px;
    :hover {
        border-left: 4px solid #116149; 
    }
`;
const Title = styled.p`
    font-size: 17.5px;
    font-weight: bold;
    width: 100%;

`;
const Description = styled.p`
`;

const MenuButton = props => {

    return (
        <Wrapper to={props.link}>
            <Title>{props.title}</Title>
            {/*<Description>{props.description}</Description>*/}
            <i class="fas fa-bars"></i>
        </Wrapper>
    )
}
export default MenuButton;