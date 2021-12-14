import React, { Component } from 'react'

import './Cards.css';
const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="card1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis aliquam doloremque esse ea pariatur ut officia nostrum nobis vitae!
                 </p>
                <a href="#" className="btn btn-outline-success">Enquire now</a>

            </div>
        </div>
    );
}

export default Card;