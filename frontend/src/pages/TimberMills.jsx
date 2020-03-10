import React, { useState } from 'react';
import styled from 'styled-components';
import timberimg from '../images/timber.jpeg'
import catalogue from '../documents/CatalogDraft.pdf';
import pilot from '../images/pilot.png';
import Industry from '../components/Industry.jsx';

const TimberMills = () => {

    // variables
    const title = "Timber Mills";
    const description = "We provide our Airmation valves for Grey Bench & other controls. \
        Our valves are heavy duty with stainless steel spools & aluminium end caps & bodies"
        
    const relatedProducts = [
        { img: pilot, title: "1\" Pilot Operated Valve", info: "5/3 Port model"}
    ]

    return (
        <Industry 
            bannerimg={timberimg}
            title={title}
            description={description}
            relatedproducts={relatedProducts}
        />
    )
}



export default TimberMills;