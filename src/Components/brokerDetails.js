import React, { Component } from 'react'
import Enigma_promise from './Enigma_promise.jpg';
import brokerVideo from './brokerVideo.mp4';
import './BrokerDetails.css'
import Navbar from '../Navbar/Navbar';


export default class BrokerDetails extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
            <Navbar/>
            <div >
                <img src={Enigma_promise} alt="image"></img>
                <div className="videoBroker">
                    <video height="750" controls autoPlay>
                        <source src={brokerVideo} type="video/mp4"></source>
                    </video>
                </div>

                <div className="main_table">

                    <table className="brokerTable">
                        <caption>--Broker Details--     </caption>

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Area</th>
                                <th>Contact</th>
                                <th>email</th>
                                <th>Rating</th>
                                <th>Availability status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Venkata Akhil </td>
                                <td>Bangalore</td>
                                <td>6866944535</td>
                                <td>4ad199@tempgmail.ga</td>
                                <td>5/10</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td>Kalyani Swapnil</td>
                                <td>Bangalore</td>
                                <td>7467232178</td>
                                <td>rrtkrichard55z@eetieg.com</td>
                                <td>8/10</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td>Esha Kshitija </td>
                                <td>Bangalore</td>
                                <td>9173346848</td>
                                <td> </td>
                                <td>8/10</td>
                                <td>Unavailable</td>
                            </tr>
                            <tr>
                                <td>John Quil </td>
                                <td>Chennai</td>
                                <td>8810039487</td>
                                <td>abc@gmail.com</td>
                                <td>7/10</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td>Liz Erd </td>
                                <td>Chennai</td>
                                <td>9664035552</td>
                                <td>9fianeso22a@ndmlpife.com</td>
                                <td>6/10</td>
                                <td>Unavailable</td>
                            </tr>
                            <tr>
                                <td>Perry Scope </td>
                                <td>Delhi</td>
                                <td>6938456249</td>
                                <td>1jbmarketiere@omilk.site</td>
                                <td>9/10</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td>Frank N. Stein </td>
                                <td>Delhi</td>
                                <td>9204647220</td>
                                <td>amemati100289@visieonl.com</td>
                                <td>8/10</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td>Anne Teak</td>
                                <td>Mumbai</td>
                                <td>9034938214</td>
                                <td> </td>
                                <td>9/10</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td>C. Yasoon </td>
                                <td>Mumbai</td>
                                <td>8298092963</td>
                                <td>xluisotaviox.8d@zouber.site</td>
                                <td>9/10</td>
                                <td>Available</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
            </>
        )
    }

}