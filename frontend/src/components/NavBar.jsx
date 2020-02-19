import React, { useState } from "react";
import styled from 'styled-components';
import { Link, navigate } from '@reach/router';
import Logo from '../images/logo2.png';
import MenuButton from './MenuButton.jsx';
import ThreeBars from '../images/3bars.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const RegularNav = styled.div`
    display: flex;
    @media screen and (max-width: 865px) {
        display: none;
    }
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

const ShrunkNav = styled.div`
    display: none;
    flex-direction: column;
    @media screen and (max-width: 865px) {
        display: flex;
    }
`;

const ShrunkNavTopBar = styled.div`
    box-sizing: border-box;
    padding-left: 20px;
    width: 100%;
    height: 70px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #d6d6d6;
`;

const MenuToggleButton = styled.img`
    height: 70px;
    width: 10%;
    overflow: hidden;
    position: centre;
    object-fit: cover;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    width: 100%;
`;

const Option = styled.div`
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #d6d6d6;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavBar = () => {
    const [shrunkNavMenu, setShrunkNavMenu] = useState(false);
    const [productsMenu, setProductsMenu] = useState(false);
    const [industriesMenu, setIndustriesMenu] = useState(false);

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
            <RegularNav>
                <HeadingsMenu>
                    <Link to='/'>
                        <LogoWrapper src={Logo}/>
                    </Link>
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
            </RegularNav>
            <ShrunkNav>
                <ShrunkNavTopBar>
                    <Link to='/'>
                        <LogoWrapper src={Logo}/>
                    </Link>
                    <MenuToggleButton 
                        src={ThreeBars}
                        onClick={() => {setShrunkNavMenu(!shrunkNavMenu)}}
                    />
                </ShrunkNavTopBar>
                
                {shrunkNavMenu ? (
                <Menu>
                    <Option>  Products
                       
                        <MenuToggleButton 
                            src={ThreeBars}
                            onClick={() => {setProductsMenu(!productsMenu)}}
                        />   
                    </Option>
                    {productsMenu ? (
                        <MenuButton 
                            title='Our Valve Range'
                            description='Testing button'
                            link='/product'
                            shrunkNav={true}
                        />
                        ): <></>} 

                    <Option>Industries
                        <MenuToggleButton 
                            src={ThreeBars}
                            onClick={() => {setIndustriesMenu(!industriesMenu)}}
                        /> 
                    </Option>
                    {industriesMenu ? (<>
                    <MenuButton
                        title='Timber Mills'
                        description='Testing'
                        link=''
                        shrunkNav={true}
                    />
                    <MenuButton
                        title='Mining'
                        description='Testing'
                        link='/industry'
                        shrunkNav={true}
                    />
                    <MenuButton
                        title='Transport'
                        description='Testing'
                        link=''
                        shrunkNav={true}
                    />
                    
                    </>) : <></>}
                </Menu> 
                
                ) : <></>}
            </ShrunkNav>
        </Wrapper>
    );
};

export default NavBar;