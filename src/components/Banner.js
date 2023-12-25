import React from 'react';
import '../Assets/CSS/Banner.css';

const Banner = (props) => {
    return (
        <>
        <img src={props.image} className='Banner' alt='HeaderBanner'/>
        
        </>

    )
}

export default Banner;