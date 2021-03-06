
import React from 'react'

export default function slideshow() {
    
    const style = {
        // * { box - sizing: border - box },
    
    /* Slideshow container */
    .slideshow - container {
        maxWidth: "1000px";
        position: "relative";
        margin: "auto";
    }
    
    /* Hide the images by default */
    .mySlides {
        display: none;
    }
    
    /* Next & previous buttons */
    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50 %;
        width: auto;
        margin - top: -22px;
        padding: 16px;
        color: white;
        font - weight: bold;
        font - size: 18px;
        transition: 0.6s ease;
        border - radius: 0 3px 3px 0;
        user - select: none;
    }
    
    /* Position the "next button" to the right */
    .next {
        right: 0;
        border - radius: 3px 0 0 3px;
    }
    
    /* On hover, add a black background color with a little bit see-through */
    .prev: hover, .next:hover {
        background - color: rgba(0, 0, 0, 0.8);
    }
    
    /* Caption text */
    .text {
        color: #f2f2f2;
        font - size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100 %;
        text - align: center;
    }
    
    /* Number text (1/3 etc) */
    .numbertext {
        color: #f2f2f2;
        font - size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
    }
    
    /* The dots/bullets/indicators */
    .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background - color: #bbb;
        border - radius: 50 %;
        display: inline - block;
        transition: background - color 0.6s ease;
    }
    
    .active, .dot:hover {
        background - color: #717171;
    }
    
    // /* Fading animation */
    // .fade {
    //     -webkit - animation - name: fade;
    //     -webkit - animation - duration: 1.5s;
    //     animation - name: fade;
    //     animation - duration: 1.5s;
    // }
    
    // @-webkit - keyframes fade {
    //   from { opacity: .4 }
    //   to { opacity: 1 }
    // }
    
    // @keyframes fade {
    //   from { opacity: .4 }
    //   to { opacity: 1 }
    // }
    }
    return (
        <div>
        <div class="slideshow-container">

<div className="mySlides fade">
  <div  className="numbertext">1 / 3</div>
  <img src="img_nature_wide.jpg" style="width:100%"/>
  <div  className="text">Caption Text</div>
</div>

<div  className="mySlides fade">
  <div  className="numbertext">2 / 3</div>
  <img src="img_snow_wide.jpg" style="width:100%"/>
  <div  className="text">Caption Two</div>
</div>

<div  className="mySlides fade">
  <div  className="numbertext">3 / 3</div>
  <img src="img_mountains_wide.jpg" style="width:100%"/>
  <div  className="text">Caption Three</div>
</div>

<a  className="prev" onclick="plusSlides(-1)">&#10094;</a>
<a  className="next" onclick="plusSlides(1)">&#10095;</a>

</div>
<br/>

<div style="text-align:center">
  <span  className="dot" onclick="currentSlide(1)"></span> 
  <span  className="dot" onclick="currentSlide(2)"></span> 
  <span  className="dot" onclick="currentSlide(3)"></span> 
</div>
</div>


    )
}
