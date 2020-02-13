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

    :hover {
        text-decoration: underline;
    }
`;

const Footer = () => {

    const pages = [
        { name: 'Air & Automation', location: '' },
        { name: 'Valve range', location: '' },
        { name: 'Cylinders/others', location: '/industry/' },
        { name: 'Mining', location: '/industry/' },
        { name: 'Timber Mills', location: 'industry/' },
        { name: 'Transport', location: '' }, // scroll down to the location bit when pressed
        { name: 'Contact Us', location: '' },
        { name: 'About Us', location: '' } 
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