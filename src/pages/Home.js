import React from 'react';
import HomeBanner from '../Assets/Images/Home.jpg';
import Banner from '../components/Banner';
import '../Assets/CSS/Home.css';
import HomeFeatures from '../components/HomeFeatures';
import Testimonals from '../components/Testimonals';
import Enjoy from '../Assets/ICONS/Enjoy.png';
import Engage from '../Assets/ICONS/Engage.png';
import Discover from '../Assets/ICONS/Discover.png';

function Home() {
    return (
        <>
            <Banner image={HomeBanner} />
            <div className='container mt-5'>
                <h1 className='welcomeHeading text-center'>Welcome to Our Website</h1>
                <p>
                    Explore and discover amazing content tailored just for you. Our website is designed to provide
                    you with a seamless and enjoyable experience. Whether you're here for information, entertainment,
                    or inspiration, we've got something for everyone.
                </p>
                {/* Features */}
                <div className="row mt-5 features">
                    <HomeFeatures heading="Discover" desc="Find a wealth of information and resources at your fingertips." icon="Discover" />
                    <HomeFeatures heading="Engage" desc="Connect with like-minded individuals and be part of our community." icon="Engage" />
                    <HomeFeatures heading="Enjoy" desc="Immerse yourself in captivating content and delightful experiences." icon="Enjoy" />
                </div>
                <hr className='bg-warning mt-5'/>
                {/* Signup Section */}
                <div className='mt-5 text-center'>
                    <p className='h3 text-center'>Ready to get started? Sign up now and experience the difference!</p>
                    <button className='btn btn-outline-warning mt-3 text-center m-auto'>Sign Up</button>
                </div>
                {/* Testimonals or Reviews */}
                <div className='mt-5 text-center'>
                    <h1 className=''>What our users say:</h1>
                    <Testimonals />
                </div>
            </div>

        </>
    )
}

export default Home;