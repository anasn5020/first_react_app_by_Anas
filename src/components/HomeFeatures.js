import React from 'react';

const HomeFeatures = (props) => {
    return(
        <div className="col-sm-12 col-md-4 col-lg-4 shadow-lg p-5">
            <h2>{props.heading}</h2>
            <p>{props.desc}</p>
        </div>
    )
}

export default HomeFeatures;