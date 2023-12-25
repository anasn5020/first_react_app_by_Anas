import React from 'react';
import Banner from '../components/Banner';
import BlogBanner from '../Assets/Images/BlogBanner.jpeg'


function Blog() {
    return(
        <>
        <Banner image={BlogBanner} />
        <h1>Blog Page</h1>
        </>
    )
}

export default Blog;