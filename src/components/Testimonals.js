import React from 'react';
import car1 from '../Assets/Images/cars1.jpg';
import car2 from '../Assets/Images/cars2.jpg';
import car3 from '../Assets/Images/cars3.jpg';

const Testimonals = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={car1} class="d-block w-100" alt="image1" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3 className=''>Sarah123</h3>
                            <p className='fst-italic'>I couldn't be happier with the service provided by this website. The user interface is intuitive, and the customer support is exceptional. Anytime I had a question, they were quick to respond and went above and beyond to assist me. Highly recommended!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={car2} class="d-block w-100" alt="image1" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3 className=''>BusinessPro123</h3>
                            <p className='fst-italic'>Using this website has been a game-changer for my business. The analytics tools provide valuable insights, and the integrated solutions have streamlined our workflow. Our team loves the collaborative features, and we've seen a significant boost in productivity. Thank you for creating such a powerful platform!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={car3} class="d-block w-100" alt="image1" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3 className=''>TechEnthusiast22</h3>
                            <p className='fst-italic'>This website offers an impressive array of features that are both powerful and easy to use. The sleek and modern design makes navigation a breeze. I appreciate the attention to detail and the constant updates that enhance the overall user experience. Great job!</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Testimonals;