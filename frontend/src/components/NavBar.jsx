import React, { useState } from "react";
import styled from 'styled-components';
import { Link, navigate } from '@reach/router';
import Logo from '../images/logo2.png';
import MenuButton from './MenuButton.jsx';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeadingsMenu = styled.div`
    box-sizing: border-box;
    padding: 0 60px;
    width: 100%;
    height: 70px;
    position: fixed;
    display: flex;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #d6d6d6;
`;

const DropDownMenu = styled.div`
    box-sizing: border-box;
    width: 400px;
    background-color: white;
    box-shadow: 0 8px 6px -6px black;
    position: absolute;
    flex-direction: column;
    display: none;
    left: 0;
    top: 70px;
`;

const IndustriesDropDownHover = styled.div`
    :hover ${DropDownMenu} {
        display: flex;
        left: 415px;
    }
`;

const ProductsDropDownHover = styled.div`
    :hover ${DropDownMenu} {
        display: flex;
        left: 305px;
    }
`;

const Button = styled(Link)`
    display: flex;
    align-items: center;
    height: 66px;
    font-size: 17px;
    font-weight: bold;
    color: #000000;
    text-decoration: none;
    margin-left: 16px;
    margin-right: 16px;
    border-bottom: 4px solid transparent;
    :hover {
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
    @media screen and (max-width: 865px) {
        display: none;
    }
    display: flex;
    align-items: center;
`;

const CollapsibleDropdown = styled.div`
    display: none;

    @media screen and (max-width: 865px) {
        display: flex;
    }
`;

const CDButton = styled.div`
    width: 100%;
`;


const SubMenu = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: grey;
`;

const SubMenuHeading = styled.div`
    height: 15%;
    border-bottom: 3px solid black;
`;

const SubMenuBody = styled.div`
    height: 85%;
    display: flex;
    flex-direction: column;
    padding-top: 3%;
`;

const SubMenuButton = styled(Link)`
    margin-top: 0.75%;
    height: 10%;
    font-size: 18.5px;
    width: 5%;
    text-decoration: none;
    color: black;
    :hover {
        text-decoration: underline;
    }
`;

const SubMenuHeadingTitle = styled.h3`
    font-size: 22px;
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

    const subheadings = [];

    return (
        <Wrapper>
            <HeadingsMenu>
                <Link to='/'>
                    <LogoWrapper src={Logo}/>
                </Link>
                <CollapsibleDropdown>
                    <CDButton>
                        
                    </CDButton>
                </CollapsibleDropdown>
                <Buttons>
                <Button to=''>Air & Automation</Button>
                <ProductsDropDownHover>
                    <Button to=''>
                        Products▼
                    </Button>
                    <DropDownMenu>
                            <MenuButton
                                title='Our Valve Range'
                                description='Testing button'
                                link='/product'
                            />
                            <MenuButton
                                title='Cylinders/Other'
                                description='Testing button2'
                                link='/product'
                            />
                    </DropDownMenu>
                </ProductsDropDownHover>
                <IndustriesDropDownHover>
                    <Button to=''>Industries ▼</Button>
                    <DropDownMenu>
                        <MenuButton
                            title='Timber Mills'
                            description='Testing'
                            link=''
                        />
                        <MenuButton
                            title='Mining'
                            description='Testing'
                            link='/industry'
                        />
                        <MenuButton
                            title='Transport'
                            description='Testing'
                            link=''
                        />
                    </DropDownMenu>
                </IndustriesDropDownHover>
                <Button to=''>Contact Us</Button>
                <Button to=''>About Us</Button>
                
                </Buttons>
                
            </HeadingsMenu>
            
        </Wrapper>
    );
};

export default NavBar;