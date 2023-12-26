import React from 'react';
import Banner from '../components/Banner';
import ContactBanner from '../Assets/Images/Contact.jpg';
import ContactUs from '../components/ContactUs';

function Contact() {
    return(
        <>
        <Banner image={ContactBanner} />
        <div className='container mt-5'>
            <ContactUs />
        </div>
        </>
    )
}

export default Contact;