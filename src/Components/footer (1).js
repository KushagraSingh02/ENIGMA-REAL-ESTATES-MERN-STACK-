import React, { Component } from 'react'
import './footer.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import play_app_store from './play_app_store.jpg';
import AboutUsBlock from './AboutUsBlock';
import Navbar from '../Navbar/Navbar';
export default class Footer extends Component {
    
    
    render() {
        
        return (
            <>
            {/* <Navbar/> */}
            <div className="footer">
                <div className="footer_container">
                    <div className ="footer_row">
                        <div className="footer_col1">
                        <h3 className="footer_links"><Link to="/AboutUsBlock" className="linkTag">About Us</Link></h3>
                            <h3>Download our App</h3>
                            <p>Download App for Android and ios devices</p>
                            <div className="play_app_store">
                                <img src={play_app_store} alt=""/>
                            </div>
                        </div>
                        <div className="footer_col2">
                            <h3>ENIGMA ESTATES</h3>
                            <p>We would love to help you find the best real estate agent</p>
                        </div>
                        <div className="footer_col3">
                            <h3>Useful Links</h3>
                            <ul>
                            <li><Link to='/Home' className="linkTag">Coupons</Link></li>
                            <li><Link to='/Home' className="linkTag">Blog</Link></li>
                            <li><Link to='/Home' className="linkTag">Careers</Link></li>
                            <li><Link to='/Home' className="linkTag">Sitemap</Link></li>
                            </ul>
                        </div>
                        <div className="footer_col4">
                            <h3>Follow us</h3>
                            <ul>
                                <li><Link to='/Home' className="linkTag">Twitter</Link></li>
                                <li><Link to='/Home' className="linkTag">Instagram</Link></li>
                                <li><Link to='/Home' className="linkTag">LinkedIN</Link></li>
                                <li><Link to='/Home' className="linkTag">Youtube</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <hr/>
                        <p className="copyright_footer">&copy;Copyright 2021-Enigma Estates</p>
                    
                </div>
            </div>

            </>
        )
    }
}