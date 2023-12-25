import React from 'react';

const HomeFeatures = (props) => {
    return(
        <div className="col">
        <h2>{props.heading}</h2>
        <p>{props.desc}</p>
    </div>
    )
}

export default HomeFeatures;