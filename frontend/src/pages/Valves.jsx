import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import cylinderimg from '../images/cylinder.png';
import pilotimg from '../images/pilot.png';
import { Link, navigate } from '@reach/router';
import catalogue from '../documents/CatalogDraft.pdf';
import ProductType from '../components/ProductType.jsx';



const Valves = (props) => {

    const heading = "Valve range";
    const description = "Air & Automation offer this range of Pneumatic Cylinders \
        called the \'P95\' series which is available in bore sizes \
        from 1-1/2\" to 12\". These heavy duty Australian made cylinders \
        are manufactured to the highest quality conforming to NFPA style, \
        which is optional or Airmation style which is standard. \
        For more information including ordering code, bore sizes, piston rod end styles, \
        function, mounting types and accessories refer to pages 18 through to 32 of our \
        catalogue which is available on this website (see Homepage)."

    return (
        <ProductType 
            img={pilotimg}
            title={heading}
            description={description}
            catalogue={catalogue}
        
        />
    )

}

export default Valves;