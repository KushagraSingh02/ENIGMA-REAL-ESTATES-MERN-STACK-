import React, { Component } from 'react'
import roller1 from './roller1.jfif';
import roller2 from './roller2.jpg';
import roller3 from './roller3.jpg';
import roller4 from './house.jpg';
import './Rolling_images.css'
// import roller_auto from './roller_auto';


export default class Rolling_images extends Component {
    render() {
        // function roller(){
    
        //     let counter = 1;
        //     setInterval(function () {
        //         document.getElementById('radio' + counter).checked = true;
        //         counter++;
        //         if (counter > 4) {
        //             counter = 1;
        //         }
        //     }, 2500);
            
        // }
        // roller()
        return (
            <div className="rolling_body" style={{width:"100%"}}>
            <div className="slider" >
                <div className="slides">
                    {/* <!--radio buttons start--> */}
                    <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>
                    <input type="radio" name="radio-btn" id="radio4"/>
                                    {/* <!--radio buttons end--> */}
                                    {/* <!--slide images start--> */}
                    
                        <div className="slide first">
                            <img src={roller1} alt=""/>
                        </div>
                        <div className="slide">
                            <img src={roller2} alt=""/>
                        </div>
                        <div className="slide">
                            <img src={roller3} alt=""/>
                        </div>
                        <div className="slide">
                            <img src={roller4} alt=""/>
                        </div>
                       
                                    {/* <!--slide images end--> */}
                                    {/* <!--automatic navigation start--> */}
                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>
                                    {/* <!--automatic navigation end--> */}
                    </div>
                                {/* <!--manual navigation start--> */}
                    <div className="navigation-manual">
                        <label for="radio1" className="manual-btn"></label>
                        <label for="radio2" className="manual-btn"></label>
                        <label for="radio3" className="manual-btn"></label>
                        <label for="radio4" className="manual-btn"></label>
                    </div>
                                {/* <!--manual navigation end--> */}
                </div>
                </div>
                            
            )
    }
    
}
var counter = 1;
// setInterval(function(){
//   document.getElementById('radio' + counter).checked = true;
//   counter++;
//   if(counter > 4){
//     counter = 1;
//   }
// }, 1500);





   
    



