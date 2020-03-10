import React, { useState } from 'react';
import styled from 'styled-components';
import transportimg from '../images/transport.jpeg'
import catalogue from '../documents/CatalogDraft.pdf';
import pilot from '../images/pilot.png';
import Industry from '../components/Industry.jsx';

const Transport = () => {

    // variables
    const title = "Transport";
    const description = "We provide a range of Pneumax manual & solenoid valves for air pilot controls for \
        hydraulic valves and tailgate cylinders with pilot or solenoid valves mounted on cylinders. \
        We can also do control boxes to suit special applications."
        
    const relatedProducts = [
        { img: pilot, title: "1\" Pilot Operated Valve", info: "5/3 Port model"}
    ]

    return (
        <Industry 
            bannerimg={transportimg}
            title={title}
            description={description}
            relatedproducts={relatedProducts}
        />
    )
}



export default Transport;