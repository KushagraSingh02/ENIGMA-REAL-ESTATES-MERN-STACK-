import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from '../Navbar/Navbar';

const mapStyles = {
  width: '100%',
  height: '100%'
  
};

export class MapContainer extends Component {

    render() {
        
        return (
          <>
          <Navbar/>
        <div>
         

      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}

       
        initialCenter={
          {
            lat: this.props.latitude,
            lng: this.props.longitude
          }
        }
      />
      </div>
      </>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCoHgmt-IZ-xiIp1Z4niDCod4b5NKNa5Q0'
})(MapContainer);
