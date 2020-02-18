import React, { useState } from 'react';
import TechImg from '../images/techimg.jpeg';
import styled from 'styled-components';
import BannerImg from '../components/BannerImg.jsx';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    min-width: 100%;
    margin-top: 70px;
`;

const BusinessDescription = styled.div`
    margin-left: 30%;
    padding-top: 20px;
`;

const BusinessDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;
    padding-bottom: 15px;
`;

const DescriptionTitle = styled.h3`
    color: #464c4f;
    font-size: 20px;
    font-weight: normal;
`;

const Description = styled.p`
    font-size: 20px;
    line-height: 26px;
    color: #242222;
    width: 50%;
`;

const Locations = styled.div`
    height: 50%;
    border-top: 0.5px solid #9B9B9B;
    display: flex;
    align-items; center;
`;

const LocationsTitle = styled.p`
    font-weight: bold;
    font-size: 35px;
    padding-left: 5%;
    padding-top: 40px;
    width: 20%;
`;

const LocationAddress = styled.div`
    font-size: 20px;
    line-height; 26px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 4%;
`;

const LocationHeading = styled.p`
    font-weight: bold;
`;

const Address = styled.p`
`;

const Landing = () => {
    return (
        <Wrapper>
            <BannerImg img={TechImg} />
            <BusinessDescriptionWrapper>
                <BusinessDescription>
                    <DescriptionTitle> Custom-made valves and Cylinders </DescriptionTitle>
                    <Description> 
                    Operating for over 50 years, Air & Automation provides 
                    quality valves and cylinders for different industries. 
                    We can make unique, handmade valves and cylinders that fit your needs.
                    </Description>
                </BusinessDescription>
            </BusinessDescriptionWrapper>
            
            <Locations>
                <LocationsTitle>Locations</LocationsTitle>
                <LocationAddress>
                    <LocationHeading>Sydney</LocationHeading>
                    <Address>
                    Head Office and Factory <br/>
                    3-9 Herbert Streeet, Mortlake NSW 2137 <br/>
                    Phone: 9743 1271 <br/>
                    Mobile: 0401 728 471 <br/>
                    email: airauto2@ihug.com.au
                    </Address>
                </LocationAddress>
                <LocationAddress>
                    <LocationHeading>Melbourne</LocationHeading>
                    <Address>
                    Sales Office <br/>
                    12/200 Cantebury Road, Bayswater VIC 3135 <br/>
                    Phone: (03) 9720 2311 <br/>
                    Mobile: (03) 9720 2577 <br/>
                    email: airautomel@ihug.com.au <br/>
                    </Address>
                </LocationAddress>
            </Locations>
        </Wrapper>
    );
};
export default Landing;