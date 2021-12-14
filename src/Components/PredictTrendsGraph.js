import React, { Component } from 'react'

import './PredictTrends.css'
const PredictTrendsGraph = props => {
    return (
        <div className="predictBody">
            <h2 className="place_heading">Sale Price Trends in {props.place}</h2>
            <div className="overflow1">
                <img src={props.grapha} alt="graph1" className="grapha" />
                <img src={props.graphb} alt="graph1" className="graphb" />
            </div>
        </div>
    );
}

export default PredictTrendsGraph;