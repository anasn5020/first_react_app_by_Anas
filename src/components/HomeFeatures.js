import React from 'react';
import Enjoy from '../Assets/ICONS/Enjoy.png';
import Engage from '../Assets/ICONS/Engage.png';
import Discover from '../Assets/ICONS/Discover.png';


const HomeFeatures = (props) => {
        // Map the icon prop to the corresponding imported image
        const getImage = (icon) => {
            switch (icon) {
                case 'Discover':
                    return Discover;
                case 'Engage':
                    return Engage;
                case 'Enjoy':
                    return Enjoy;
                default:
                    return null;
            }
        };
    
        const iconImage = getImage(props.icon);

    return(
        <div className="col-sm-12 col-md-4 col-lg-4 shadow-lg p-5">
            <img src={iconImage} alt="Feature Image" className='w-25' />
            <h2>{props.heading}</h2>
            <p>{props.desc}</p>
        </div>
    )
}

export default HomeFeatures;