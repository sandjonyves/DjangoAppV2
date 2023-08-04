import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'flowbite-react';
 import "../style/Style_images_one.css"
import NameSite from '../BodyComponent/NameSite';

function ImageCoponentOne() {

  const [images]=useState([
    "images (4).jpeg",
    "images (1).jpeg",
    "images (2).jpeg",
    "images (3).jpeg"])
  return (
    
<div className="m-[0%] md:m-[0%] w-[100%] h-[500px] ">


<Carousel autoPlay  interval={1500} infiniteLoop='true'    thumbWidth={50}  >


{images.map( (img) => {
  return( 
  <div className='md:shrink-0 bg-blue-400 '>
  <img src={img} className=" h-[520px] md:h-[900px] w-full" alt="imgas "></img>
  </div>
  
  )

})}
  </Carousel>
</div>
   
       
  );
}


export default ImageCoponentOne