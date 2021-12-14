import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        const style1 = {

            backgroundColor: "#474d4e",
            overflow: "hidden",
            position: "fixed",
            left: "0",
            bottom: "0",
            right: "0"  

        }

        const style2 = {


            padding: "20px",
            textAlign: "center",
            float: "left",
            color: "white"
        }
        return (

            <div className="footer" style={style1}>
                <a href="#" style={style2}>&nbsp;Instagram&nbsp;</a>
                <a href="#" style={style2}>&nbsp;Linkedin&nbsp;</a>
                <a href="#" style={style2}>&nbsp;Twitter&nbsp;</a>

                <a href="#" style={style2}>&nbsp;Broker Details&nbsp;</a>
                <a href="#" style={style2}>&nbsp;About Us&nbsp;</a>

                <a href="#" style={style2}>&copy;Enigma</a>
            </div>
        )
    }
}

export default Footer
