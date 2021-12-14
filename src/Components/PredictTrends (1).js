import React, { Component } from 'react'
import './PredictTrends.css'
import PredictTrendsGraph from './PredictTrendsGraph';
import graph1a from './graph1_banashankari.jpg';
import graph1b from './graph1_b.jpg';
import graph2a from './graph2a.jpg';
import graph2b from './graph2b.jpg';
import graph3a from './graph3a.jpg';
import graph3b from './graph3b.jpg';
import graph4a from './graph4a.jpg';
import graph4b from './graph4b.jpg';
export default class PredictTrends extends Component {
    render() {
        
        return (
            <div>
                
                <PredictTrendsGraph place="Banashankari" grapha={graph1a} graphb={graph1b}/>
                <PredictTrendsGraph place="Jalahalli" grapha={graph2a} graphb={graph2b}/>     
                <PredictTrendsGraph place="HSR Layout" grapha={graph3a} graphb={graph3b}/>
                <PredictTrendsGraph place="Electronic City" grapha={graph4a} graphb={graph4b}/>
                <div className="welcome-text">
                <h1>ENIGMA <br/><span>REAL ESTATES</span></h1>
                {/* <a href="#">Contact US</a> */}
                </div>
            </div>
            
        )
    }
}
