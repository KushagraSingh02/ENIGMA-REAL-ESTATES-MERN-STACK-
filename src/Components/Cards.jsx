import React, { Component } from 'react'
import Card from './CardUI';
import card1 from './image1.jpg';
import roller2 from './roller2.jpg';
import roller3 from './roller3.jpg';
import roller4 from './house.jpg'

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-center">
                <div className="row">
                {/* <h1>{this.props.head}</h1> */}
                <br/> <br/>
                    <div className="col-md-4 ">
                        
                        <Card imgsrc={this.props.image1} title={this.props.title1}/>
                    </div>
                    <div className="col-md-4">
                        <Card  imgsrc={this.props.image2} title={this.props.title2}/>
                    </div>
                    <div className="col-md-4">
                        <Card  imgsrc={this.props.image3} title={this.props.title3}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards;