import React from "react";
//import { FaBars, FaTimes } from "react-icons/fa";
// import "./composent/style/Style_navBar.css";
import ImageCoponentOne from "./composent/ImageComponent/ImageComponentOne";
import BodyTextTwo from "./composent/BodyComponent/BodyTextTwo";
import BodyLeftOne  from "./composent/BodyComponent/BodyLeftOne"
// import NameSite from "./composent/BodyComponent/NameSite"
import "./App.css"
//import Footer_end from "./composent/footer_end";
//import {Routes,Route} from "react-router-dom";
//import {BrowserRouter, Link } from "react-router-dom";
import Bodybutton from "./composent/BodyComponent/BodyButton";
//import BodyOther from "./composent/OtherCoponent/BodyOther";


//import ChooseStandard from "./composent/Forms/FormsGet/ChooseStandard";
// import { Alert, Avatar, Breadcrumb, Button, Card, Carousel, Footer} from 'flowbite-react';

// import { HiHome } from 'react-icons/hi';
import Navbars from "./composent/Navbar";
import Footers from "./composent/OtherCoponent/Footer";

function App() {

    //const navref = useRef()

  //   const shownav = () => {
    
  //      navref.current.classList.toggle('responsive_bar')
  //  }
  
return(

  <React.Fragment>


<div className="sticky top-0 z-[60]">
<Navbars></Navbars>


</div>
   <div className="m-1">

    <ImageCoponentOne></ImageCoponentOne>
   </div>
   <div className="bg-sky-300 flex justify-center  w-full">

   <Bodybutton></Bodybutton>
   </div>
   <div className="mb-2 p-5 bg-sky-300 flex justify-center  ">
     
    <BodyLeftOne></BodyLeftOne>
   </div>

   <div className="">
    <BodyTextTwo></BodyTextTwo>
   </div>

   <div>
    <Footers></Footers>
   </div>

{/* 
<Carousel>
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel> */}
    {/* <Alert color="info">
      <span>
        <p>
          <span className="font-medium">
            Info alert!
          </span>
          Change a few things up and try submitting again.
        </p>
      </span>
    </Alert>
 <Button.Group>
      <Button color="gray">
        Profile
      </Button>
      <Button color="gray">
        Settings
      </Button>
      <Button color="gray">
        Messages
      </Button>
    </Button.Group>

    <div className="flex flex-wrap gap-2">
      <Avatar
        alt="avatar of Jese"
        img="logo.png"
        rounded
      />
      <Avatar img="/images/people/profile-picture-5.jpg" />
    </div>

    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item
        href="#"
        icon={HiHome}
      >
        <p>
          Home
        </p>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Projects
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Flowbite React
      </Breadcrumb.Item>
    </Breadcrumb>

    <Card
      className="max-w-sm"
      href="#"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Noteworthy technology acquisitions 2021
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </p>
    </Card>

<div className="bg-red-300 w-full h-[400px] " >fdfdf<Carousel onSlideChange={slideIdx=>console.log(slideIdx)}>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 1
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 2
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 3
      </div>
    </Carousel></div>


    <div>
    <Footer container>
      <Footer.Copyright
        by="Flowbite™"
        href="#"
        year={2022}
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
    </div>
    <div>


    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand
        
         
      >
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
        
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link
         
          href="#"
        >
          <p>
            About
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div> */}
  {/* <Routes>
    <Route path="react-app/:cont" element={<BodyOther/>}/>

   
  </Routes> */}
    
{/* <div>

  <Navbar/>
</div>



<div>

  < BodyLeftOne/>
</div>

<div>
  

  <BodyTextTwo/>
</div>

<div>
  <NameSite/>
</div>


<div className=" ">

  <Footer/>
</div>



<div>
      <Button>Click me</Button>
    </div> */}
</React.Fragment>

)

}

export default App;