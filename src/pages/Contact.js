import React from 'react';
import Banner from '../components/Banner';
import ContactBanner from '../Assets/Images/ContactBanner.jpeg';

function Contact() {
    return(
        <>
        <Banner image={ContactBanner} />
        <h1>Contact Page</h1>
        </>
    )
}

export default Contact;