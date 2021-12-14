import React, { Component } from 'react'
import product_card from './Product_data'
import './BookProperty.css'
import Navbar from '../Navbar/Navbar'

import {Button} from 'react-bootstrap';


  
  
const MainContent=()=>{
    
   
 
    const listItems=product_card.map((item)=>
    <div className="productCard" key={item.id}>
        <div className="product_img">
            <img src={item.thumb} alt="img"/>
        </div>.
        <div className="productCard_header">
            
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
            <p className="propertyprice">{item.price}<span>{item.currency}</span></p>
         <Button onClick={()=>alert(item.product_name+"\nBooking confirmed" )}>Book Property</Button>

            {/* <Alert color="primary" isOpen={this.state.visible} toggle={this.toggle.bind(this)}>check</Alert> */}
        </div>
        {/* onClick={alert("booking confiremd")}
        onClick={showAlert("booking confirmed","success")}>Book now</a> */}
    </div>
    );
    return(
        <>
        <Navbar/>
        <div className="productContainer">
            <div className="welcome-text">
                
                <h3>Find your home now!!</h3>
            </div>
            <div className="product_main_content">
                
                {listItems}
            </div>
            <div className="welcome-text">
                <h1>ENIGMA <br/><span>REAL ESTATES</span></h1>
                
            </div>
        </div>
        </> 
        
    )
    
}

export default MainContent
