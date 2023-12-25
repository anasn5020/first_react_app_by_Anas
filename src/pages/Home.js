import React from 'react';
import HomeBanner from '../Assets/Images/HomeBanner.jpeg';
import Banner from '../components/Banner';
import '../Assets/CSS/Home.css';
import HomeFeatures from '../components/HomeFeatures';


function Home() {
    return(
        <>
        <Banner image={HomeBanner} />
        <div className='container mt-5'>
            <h1 className='welcomeHeading'>Welcome to Our Website</h1>
                <p>
                    Explore and discover amazing content tailored just for you. Our website is designed to provide
                    you with a seamless and enjoyable experience. Whether you're here for information, entertainment,
                    or inspiration, we've got something for everyone.
                </p>


                <div className="row mt-5 features">
                    <HomeFeatures heading="Discover" desc="Find a wealth of information and resources at your fingertips."/>
                    <HomeFeatures heading="Engage" desc="Connect with like-minded individuals and be part of our community."/>
                    <HomeFeatures heading="Enjoy" desc="Immerse yourself in captivating content and delightful experiences."/>
                </div>
        </div>
        
        </>
    )
}

export default Home;