import React, { Component } from 'react'
import Maps from './Maps'
import Footer from './Footer';
export class Maploc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude : 12.9354,
            longitude : 77.5358
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    // const [pos, setpos] = useState({lat:"",long:""})

    getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        }
        else{
            alert("Geolocaiton is not supported by this browser")
        }
    }
    
    getCoordinates(position){
        this.setState({
    
            latitude: position.coords.latitude,
            longitude :position.coords.longitude

            
        }) 
        console.log(this.state.latitude+" "+this.state.longitude);
    }

    componentDidMount(){
        this.getLocation();
    }
    render() {
        return (
            <>
            <div>
                {/* <button onClick={this.getLocation}>Find My Location</button>    */}
                <Maps style={{padding:"20px 20px 20px 20px",marginLeft:"30px",marginTop:"30px"}} latitude={this.state.latitude} longitude={this.state.longitude} />
            {/* <Footer/> */}
            </div>
            </>
        )
    }
}

export default Maploc
