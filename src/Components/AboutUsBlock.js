import React, { Component } from 'react'
import AboutUs from './AboutUs';
import Kushagra from './Kushagra.jpg';
import Jeffrey from './jeffrey.JPG';
import Navbar from '../Navbar/Navbar';
export default class AboutUsBlock extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        var BlockStyle =
        {
            backgroundColor: "#474d4e",
            height: 1000,
        }
        var aboutUs_style={
            display:"inline-block"
        }
        return (
            <>
            <Navbar/>
            <div className="BlockStyle">
                <h2 >About us</h2>
                
                <AboutUs style={aboutUs_style} pic={Kushagra} name="Kushagra Singh" srn="657" email="skushagra11@gmail.com " />
                <AboutUs pic={Jeffrey} name="Jeffrey S  Varghese " srn="651" email="jeff071604@gmail.com" />

            </div>
            </>
        )
    }

}