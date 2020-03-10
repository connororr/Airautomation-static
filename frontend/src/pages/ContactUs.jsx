import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import cylinderimg from '../images/cylinder.png';
import { Link, navigate } from '@reach/router';
import catalogue from '../documents/CatalogDraft.pdf';
import ProductType from '../components/ProductType.jsx';


const Wrapper = styled.div`
    display: flex;
`;

const Enquire = styled.div``;

const Locations = styled.div``;

const ContactUs = () => {

    return (
        <Wrapper>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.7009130480606!2d151.1063584151848!3d-33.84582298066257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a53c545d72ab%3A0x6a51039237f82cef!2sAir%20%26%20Automation%20Equipment%20PTY%20LTD!5e0!3m2!1sen!2sau!4v1583796861598!5m2!1sen!2sau" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            <Enquire>
            
            </Enquire>
            <Locations>

            </Locations>
        </Wrapper>

    )
}

export default ContactUs;