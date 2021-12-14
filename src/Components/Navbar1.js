import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './nav1.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Menuitems } from './Menuitems'
import Maps from '../Components/Maps';
import Maploc from '../Components/Maploc';
import Notes from '../Components/Notes';
import BookProperty from '../Components/Notes';
import PredictTrends from '../Components/PredictTrends';
import Logout from '../Components/Logout';

export default class Navbar extends Component {

    static propTypes = {
        prop: PropTypes
    }

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
           
                <nav className="NavbarItems" >

                    <div>
                        {/* <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div> */}
                        <h3 className="titles">ENIGMA  </h3>
                        {/* <ul className= 'nav-menu'>
                           <li className="nav-links"><Link to="/Home" style={{color:" rgb(248, 249, 252)"}}>Home</Link></li>
                           <li className="nav-links"><Link to="/News"  style={{color:" rgb(248, 249, 252)"}}>News </Link> </li>
                           <li className="nav-links"><Link to="/Notes"  style={{color:" rgb(248, 249, 252)"}}>Post Property </Link></li>
                           <li className="nav-links"><Link to="/BookProperty"  style={{color:" rgb(248, 249, 252)"}}>Book Property </Link></li>
                           <li className="nav-links"><Link to="/PredictTrends"  style={{color:" rgb(248, 249, 252)"}}>Predict Trends </Link></li>
                        </ul> */}
                        {/* <div id="account3" ><Link to="/Logout" className="linkTag" style={{color:" rgb(248, 249, 252)"}}><i class="fas fa-sign-out-alt"></i> </Link> </div> */}
                        <div  id="account1" ><Link to="/Login" className="linkTag" style={{color:" rgb(248, 249, 252)"}}><i class="fas fa-user-circle"></i> </Link> </div>
                        <div  id="account2" ><Link to="/SignUp"  className="linkTag" style={{color:" rgb(248, 249, 252)"}}><i class="fas fa-user-plus"></i> </Link> </div>

                        
                        {/* <div  id="loc" > <Link to="/MapLoc"><i class="fas fa-street-view"></i></Link> </div> */}
                        
                           {/* <li className="nav-links " id="loc" style={{marginRight:"1px"}}><a> <i class="fas fa-street-view"></i></a></li>
                           <li className="nav-links " id="cart" style={{marginRight:"1px"}}><a><i class="fas fa-shopping-cart"></i></a></li>
                           <li className="nav-links " id="account" style={{marginRight:"1px"}}><a><i class="fas fa-user-circle"></i></a></li> */}
                    </div>


                    {/* <a href="#" id="log"><img id="profile" height=30px  width = 30px src="profile.png" alt="Login/Sign Up"></a>
                    <a href="#" id="cart"><img id="profile" height=30px  width = 30px src="cart.png" alt="Cart"></a>
                    <a href="#" id="gps"><img id="profile" height=35px  width = 25px src="gps.png" alt="GPS"></a> */}



                </nav>
                <div>
                </div>
                
            </>
        )
    }
}