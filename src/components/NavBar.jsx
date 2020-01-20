import React, { useState } from "react";
import styled from 'styled-components';
import { Link, navigate } from '@reach/router';
import Logo from '../images/logo.png';


const Wrapper = styled.div`
    padding: 0 60px;
    width: 100%;
    height: 70px;
    position: absolute;
    display: flex;
    align-items: center;
    background-color: white;
`;

const Button = styled(Link)`
    display: flex;
    align-items: center;
    height: 66px;
    font-size: 15.4px;
    font-weight: bold;
    color: #000000;
    text-decoration: none;
    margin-left: 16px;
    margin-right: 16px;
    border-bottom: 4px solid transparent;
    &:hover {
        border-bottom: 4px solid #000000;
      }
    cursor: pointer;
`;

const LogoWrapper = styled.img`
  cursor: pointer;
  height: 55px;
`;

const Buttons = styled.div`
    margin-left: 16px;
    @media screen and (max-width: 665px) {
		display: none;
    }
    display: flex;
    align-items: center;
`;

const DropDownPneumax = styled.div`
    width: 100%;
    height: 300px;
    background-color: white;
    box-shadow: 0 8px 6px -6px black;
`;



const NavBar = () => {

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
                <Link to='/'>
                        <LogoWrapper src={Logo}/>
                </Link>
                <Buttons>
                    {pages.map((page) => <Button to={page.location}>{page.name}</Button>)}
                </Buttons>
                
        </Wrapper>
    );
};

export default NavBar;