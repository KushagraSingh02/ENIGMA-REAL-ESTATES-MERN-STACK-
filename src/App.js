
import './App.css';

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import News from './News';
import Navbar from './Navbar/Navbar';
import House from './headerImage.jpg';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import PostProperty from './AddNote';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Maps from './Components/Maps';
import Maploc from './Components/Maploc';
import Footer1 from './Components/footer (1)';
import Notes from './Components/Notes';
import BookProperty from './Components/BookProperty';
import PredictTrends from './Components/PredictTrends';
import AboutUsBlock from './Components/AboutUsBlock';
import BrokerDetails from './Components/brokerDetails';
import Logout from './Components/Logout';

export default class App extends Component {

  render() {
    return (

      <>

        {/* < a href="Login.js" ></a> */}
        <NoteState>
          <Router>


            <div className="" style={{ backgroundImage: `url(${House})`, height: "250px", opacity: "75%" }}>

              <h1 style={{ textAlign: "center", padding: "100px 20px 20px 20px", color: "red", opacity: "100%",fontSize:'70px' }}><strong> ENIGMA REAL ESTATES</strong></h1>
            </div>

            <div>
              {/* <Navbar style={{ position: "sticky" }} /> */}
              {/* <News/> */}
            </div>
            {/* <Login/> */}

            {/* <React.Fragment> */}
            <Switch>

              <Route exact path="/"  >
                <Redirect to="/login" />
              </Route>
              <Route exact path="/login"><Login /> </Route>

              <Route exact path="/navbar" ><Navbar /> </Route>
              <Route exact path="/Home"><Home /></Route>
              <Route exact path="/News"><News /> </Route>
              <Route exact path="/Notes"><Notes /> </Route>
              <Route exact path="/BookProperty"><BookProperty /> </Route>
              <Route exact path="/PredictTrends"><PredictTrends /> </Route>

              <Route exact path="/Maploc"><Maploc /> </Route>

              <Route exact path="/SignUp"><Signup /> </Route>
              <Route exact path="/Logout"><Logout /> </Route>

              <Route exact path="/AboutUsBlock"><AboutUsBlock /></Route>
              <Route exact path="/BrokerDetails"><BrokerDetails /></Route>


            </Switch>


            <Footer1 />

            {/* </React.Fragment> */}

          </Router>

        </NoteState>
      </>
    )
  }
}
