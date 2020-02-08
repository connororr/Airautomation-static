import React, { useState } from "react";
import styled from 'styled-components';
import { Link, navigate } from '@reach/router';

const Wrapper = styled.div`
    width: 135px;
    height: 47px;
    background-color: blue;
    margin-top: 10px;
`;
const Title = styled.h4`
    height: 40%;
`;
const Description = styled.p`
    height: 40%;
`;

const MenuButton = (title, description) => {

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    )
}