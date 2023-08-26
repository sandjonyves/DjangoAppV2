import React, { Component, useState } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'flowbite-react';
 import "../style/Style_images_one.css"
// import im1 from '/home/sandjon/react/app-react/src/assets/images (1).jpeg'
// import im2 from '/home/sandjon/react/app-react/src/assets/images (2).jpeg'
// import im3 from '/home/sandjon/react/app-react/src/assets/images (3).jpeg'
// import im4 from '/home/sandjon/react/app-react/src/assets/images (4).jpeg'

function ImageCoponentOne() {

  const [images]=useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIgbXkj4hQTvwNs7bcROEzb-8GR8_Bh4NBQ&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPUAxxEePqwJdqJC0OrrWcRmVAVqpz5Nn6w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUt5GQ_s5BuzNeCa4Tz_AAGYjjTl-GeqE-Uw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1Xy31Yifw6_yUw1YWJclvFkgCKK5M6g7Q&usqp=CAU",
    
    ])
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