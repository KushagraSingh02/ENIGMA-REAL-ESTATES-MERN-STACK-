import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export class Footer extends Component {
    render() {
        // const style1 = {

        //     backgroundColor: "#474d4e",
        //     overflow: "hidden",
        //     position: "fixed",
        //     left: "0",
        //     bottom: "0",
        //     right: "0"  

        // }
        var footerStyle = {
            position: "relative",

            backgroundColor: "#474d4e",
            color: "white",
            textAlign: "center",
            padding: "50px 50px 50px",
            margin: "50",
            top: "20vh",

        }

        const style2 = {


            padding: "20px",
            textAlign: "center",
            float: "left",
            color: "white"
        }
        return (

            <div className="footer" style={footerStyle}>
                {/* <div>
                    <a href="#" style={style2}>&nbsp;Instagram&nbsp;</a>
                    <a href="#" style={style2}>&nbsp;Linkedin&nbsp;</a>
                    <a href="#" style={style2}>&nbsp;Twitter&nbsp;</a>

                    <a href="#" style={style2}>&nbsp;Broker Details&nbsp;</a>
                    <a href="#" style={style2}>&nbsp;About Us&nbsp;</a>

                    <a href="#" style={style2}>&copy;Enigma</a>
                </div> */}

                <div>
                    <ul  className='nav-menu'>
                    <a href="#" style={style2}>&nbsp;Instagram&nbsp;</a>
                    <a href="#" style={style2}>&nbsp;Linkedin&nbsp;</a>
                    <a href="#" style={style2}>&nbsp;Twitter&nbsp;</a>

                    
                        <li style={style2} className="nav-links"><Link to="/AboutUs" >About Us</Link></li>
                        <a href="#" style={style2}>&copy;Enigma</a>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Footer
