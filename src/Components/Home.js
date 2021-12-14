import React, { Component } from 'react'
import house from './house.jpg';
import './Home.css'
import Rolling_images from './Rolling_images';
import Cards from './Cards'
import card1 from './image1.jpg';
import card2 from './roller2.jpg';
import card3 from './roller3.jpg';
import card4 from './house.jpg';
import card5 from './card5.jfif';
import card6 from './card6.jfif';
import Navbar from '../Navbar/Navbar';
export default class Home extends Component {
    render() {
        
        return (
            <>
            {/* <header>
                <div className="welcome-text">
                    <h1>
                        ENIGMA <br/><span>REAL ESTATES</span></h1>
                        <h2>Find your dream home</h2>
                    <a href="#">Contact US</a>
                </div>
            </header> */}
            <Navbar/>
           

            <Rolling_images/>
            <br></br>
            {/* <br></br> */}

            <div className="welcome-text">
                <h1>ENIGMA <br/><span>REAL ESTATES</span></h1>
                {/* <a href="#">Contact US</a> */}
            </div>
            {/* <div className="welcome-text">
                
            </div> */}
            <br/>
            <h1 style={{alignContent:'center',marginLeft:'700px' }}>Recomended Properties </h1>
            <Cards head="Recomended Properties " image1={card4} image2={card5} image3={card6} title1="Blue Jay Villa's" title2="R S Properties" title3="Shoba Apartments" />
            
            <br/>
            <h1 style={{alignContent:'center',marginLeft:'700px' }}>Handpicked Projects </h1>
            <Cards head="Handpicked Projects "image1={card1} image2={card2} image3={card3} title1="Prestige Greate Acres" title2="Birla Alokya" title3="Ragam Gardens" />
            
            </>
        )
    }
}
