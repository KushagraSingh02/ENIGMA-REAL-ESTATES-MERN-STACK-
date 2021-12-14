import React, { Component } from 'react'
import './aboutUs.css'


export default class AboutUs extends Component {
    constructor(props) {
        super(props);
    }


    render() {


        return (
            <div className="about">
                <div class="main_aboutUs">
                    <img src={this.props.pic} alt="image"></img>
                    <div className="aboutText">
                        <h1>{this.props.name}</h1>
                        <h5>Student <span>at PESU</span></h5>
                        <p>SRN:PES1UG20CS{this.props.srn}  K SECTION</p>
                        <pre>Btech: CSE 3rd SEM<br />
                            git:<a href="https://github.com/jsv1604">profile</a><br />
                            email:{this.props.email}<br />
                            instagram:<br />

                        </pre>
                        <button className="aboutUsbutton" type="button">Contact me!</button>


                    </div>

                </div>
            </div>
        )
    }
}

// class Block extends React.Component {

//     render() {
//         var BlockStyle =
//         {
//             backgroundColor: "beige",
//             border: "1px solid yellow"


//         }
//         return (
//             <div style={BlockStyle}>



//             </div>
//         )
//     }

// }