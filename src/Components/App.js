
import './App.css';

import React, { Component } from 'react'

import News1 from './News1';
import Navbar from './Navbar';
import House from './house2.jpg';
import image1 from './image1.jpg';
import headerImage from './headerImage.jpg';
import Home from './Home';
import Footer from './footer';
import AboutUsBlock from './AboutUsBlock';
import BrokerDetails from './brokerDetails';
import BookProperty from './BookProperty';
import PredictTrends from './PredictTrends';
import Maps from './Maps';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// `url(${House})`
export default class App extends Component {

  render() {
    
    return (

      <>
        <Router>
          <div className="" style={{ backgroundImage: `url(${headerImage})`, height: "300px", opacity: "60%" }}>
          
            <h1 style={{ textAlign: "center", padding: "100px 20px 20px 20px", color: "red", opacity: "100%",textTransform:"uppercase",
	          fontSize: 60}}><strong> ENIGMA REAL ESTATES</strong></h1>
          </div>

          <div>
            <Navbar style={{ position: "sticky" }} />
            {/* <News/> */}
            
          </div>
          
          <Switch>
            <Route exact path="/Home"><Home /></Route>
            <Route exact path="/News1"><News1 /> </Route>
            <Route exact path="/AboutUs"><AboutUsBlock/></Route>
            <Route exact path="/BrokerDetails"><BrokerDetails/></Route>
            <Route exact path="/PredictTrends"><PredictTrends/></Route>
            <Route exact path="/BookProperty"><BookProperty/></Route>
            <Route exact path="/Maps"><Maps/></Route>
            <Route exact path="/Cart"><Cart/></Route>
          </Switch> 
          <Footer />
        </Router>
      </>
    )
  }
}
