import { Link, navigate } from '@reach/router';
import React, { useState } from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Buttons = styled.div`
    margin-left: 5%;
    @media screen and (max-width: 665px) {
		display: none;
    }
    display: flex;
    align-items: center;
    padding-top: 40px;
`;

const Button = styled(Link)`
    height: 66px;
    font-size: 15.4px;
    line-height: 18px;
    margin-left: 30px;
    text-decoration: none;
    color: black;
`;

const Footer = () => {

    const pages = [
        { name: 'Pneumax', location: '' },
        { name: 'Fittings', location: '' },
        { name: 'Mining', location: '/industry/' },
        { name: 'Transport', location: '/industry/' },
        { name: 'Timber Mills', location: 'industry/' },
        { name: 'Contact Us', location: '' }, // scroll down to the location bit when pressed
    ];

    return (
        <Wrapper>

            <Buttons>
               {pages.map((page) => <Button to={page.location}>{page.name}</Button>)}
            </Buttons>

        </Wrapper>
    );

}

export default Footer;