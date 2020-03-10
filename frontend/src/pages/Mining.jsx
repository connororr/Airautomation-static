import React, { useState } from 'react';
import styled from 'styled-components';
import miningImg from '../images/mining.jpeg'
import catalogue from '../documents/CatalogDraft.pdf';
import pilot from '../images/pilot.png';
import Industry from '../components/Industry.jsx';

const Mining = () => {

    // variables
    const title = "Mining";
    const description = "Air & Automation offer this range of Pneumatic Cylinders \
        called the \"P95\" series which is available in bore sizes \
        from 1-1/2\" to 12\". These heavy duty Australian made cylinders \
        are manufactured to the highest quality conforming to NFPA style, \
        which is optional or Airmation style which is standard."
        
    const relatedProducts = [
        { img: pilot, title: "1\" Pilot Operated Valve", info: "5/3 Port model"}
    ]

    return (
        <Industry 
            bannerimg={miningImg}
            title={title}
            description={description}
            relatedproducts={relatedProducts}
        />
    )
}



export default Mining;