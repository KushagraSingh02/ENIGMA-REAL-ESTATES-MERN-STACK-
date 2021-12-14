import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Nav.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menuitems } from './Menuitems'
import Maps from '../Components/Maps';
import Maploc from '../Components/Maploc';
import Notes from '../Components/Notes';
import BookProperty from '../Components/Notes';
import PredictTrends from '../Components/PredictTrends';
import Logout from '../Components/Logout';
import BrokerDetails from '../Components/brokerDetails';
import News from '../News';
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
           
                <nav className="NavbarItems">

                    <div>
                        {/* <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div> */}
                        <h2 className="titles">ENIGMA  </h2>
                        <ul className= 'nav-menu'>
                           <li className="nav-links"><Link to="/Home" className="linkTag">Home</Link></li>
                           <li className="nav-links"><Link to="/News" className="linkTag" >News </Link> </li>
                           <li className="nav-links"><Link to="/PredictTrends" className="linkTag" >Predict Trends</Link></li>
                           <li className="nav-links"><Link to="/Notes" className="linkTag" >Post Property</Link></li>
                           
                           <li className="nav-links"><Link to="/BookProperty" className="linkTag" >Book Property</Link></li>
                           <li className="nav-links"><Link to="/BrokerDetails" className="linkTag" >Broker Details</Link></li>
                           {/* <li className="nav-links"><Link to="/Maps" className="linkTag" >Maps</Link></li> */}
                           {/* <li className="nav-links"><Link to="/Login" className="linkTag" >Login</Link></li> */}
                           {/* <li className="nav-links"><Link to="/SignUp" className="linkTag" >SignUp</Link></li> */}
                           {/* <li className="nav-links"><Link to="/Cart" className="linkTag" >Cart</Link></li> */}
                           {/* <li className="nav-links"><Link to="/AboutUs" style={{color:" rgb(248, 249, 252)"}}>About Us</Link></li> */}
                           
                           {/* <li className="nav-links " id="loc" style={{marginRight:"1px"}}><a> <i class="fas fa-street-view"></i></a></li>
                           <li className="nav-links " id="cart" style={{marginRight:"1px"}}><a><i class="fas fa-shopping-cart"></i></a></li>
                           <li className="nav-links " id="account" style={{marginRight:"1px"}}><a><i class="fas fa-user-circle"></i></a></li> */}
                        </ul>
                        <div  id="loc" > <a><Link to="/Logout" className="linkTag" > <i class="fas fa-sign-out-alt"></i></Link></a></div>
                        <div  id="account" ><a><Link to="/SignUp" className="linkTag" ><i class="fas fa-user-plus"></i></Link></a> </div>
                        
                        {/* <div id="cart" ><a><i class="fas fa-shopping-cart"></i></a> </div> */}
                        <div  id="loc" > <a><Link to="/Maploc" className="linkTag" > <i class="fas fa-street-view"></i></Link></a></div>
                        

                        
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