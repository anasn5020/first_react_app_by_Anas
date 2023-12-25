import React from 'react';
import Banner from '../components/Banner';
import AboutBanner from '../Assets/Images/AboutBanner.jpeg';

const About = () => {
    return(
        <>
        <Banner image={AboutBanner} />
        <h1>About Page</h1>
        </>
    )
}

export default About;