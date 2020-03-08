import React, { useState } from "react";
import styled from 'styled-components';
import { Link, navigate } from '@reach/router';
import Logo from '../images/logo2.png';
import MenuButton from './MenuButton.jsx';
import ThreeBars from '../images/3bars.png';
import { Close } from 'styled-icons/material';
import { ChevronDown, ChevronUp } from 'styled-icons/boxicons-regular';

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
    cursor: pointer;
`;

const CloseButton = styled(Close)`
    height: 40px;
    width: 10%;
    cursor: pointer;
`;

const LogoWrapper = styled.img`
  cursor: pointer;
  height: 55px;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    width: 100%;
`;

const Option = styled(Link)`
    width: 100%;
    height: 70px;
    background-color: white;
    border-top: 1px solid #d6d6d6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding-left: 10px;
    text-decoration: none;
    color: black;
`;

const OptionLink = styled(Option)`
    :hover {
        text-decoration: underline;
    }
`;

const DownArrowBtn = styled(ChevronDown)`
    height: 40px;
    width: 10%;
`;

const UpArrowBtn = styled(ChevronUp)`
    height: 40px;
    width: 10%;
`;

const OptionTitle = styled.div`
    padding-left: 5%;
`;

const CollapsibleDropDown = () => {

    const [shrunkNavMenu, setShrunkNavMenu] = useState(false);
    const [productsMenu, setProductsMenu] = useState(false);
    const [industriesMenu, setIndustriesMenu] = useState(false);

    return (
        <div>
        <ShrunkNavTopBar>
            <Link to='/'>
                <LogoWrapper src={Logo}/>
            </Link>
            {shrunkNavMenu ? (
            <CloseButton
                onClick={() => {setShrunkNavMenu(!shrunkNavMenu)}}
            />
            ) : (
                <MenuToggleButton 
                src={ThreeBars}
                onClick={() => {setShrunkNavMenu(!shrunkNavMenu)}}
            />)}
                    
        </ShrunkNavTopBar>
        {shrunkNavMenu ? 
        <Menu>
            <Option
             onClick={() => {setProductsMenu(!productsMenu)}}
             to=''
            >  Products
                {productsMenu ? <DownArrowBtn/>   : <UpArrowBtn /> }  
            </Option>
            {productsMenu ? <>
                <MenuButton 
                    title='Our Valve Range'
                    description='Testing button'
                    link='/product'
                    shrunkNav={true}
                />

            </> : <></>} 

            <Option
             onClick={() => {setIndustriesMenu(!industriesMenu)}}
             to=''
            >  Industries
                
            {industriesMenu ? <DownArrowBtn/> : <UpArrowBtn/>}
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
            <OptionLink to=''>Contact Us</OptionLink>
            <OptionLink to=''>About Us</OptionLink>
        </Menu> : <></>}
        
        </div> 
    )
}

export default CollapsibleDropDown;