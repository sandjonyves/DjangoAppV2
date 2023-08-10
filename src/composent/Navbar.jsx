import React, { useRef } from "react"
import {FaTimes,FaBars} from "react-icons/fa"
//import "./style/Style_navBar.css";
import { Link } from "react-router-dom";
import { Carousel,Navbar } from "flowbite-react";

function Navbars() {
        
         const navref = useRef()

         const shownav = () => {
         
            navref.current.classList.toggle('responsive_bar')
        }
        const [showModals, setShowModals] = React.useState(false);
       
    return(<div>
       <header className="">

<Navbar
      fluid
      rounded
      className="bg-gray-300 "
    >
      <Navbar.Brand
        
         
      >
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="logo.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Serad Education
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link
         
          href="/APropos"
        >
          <p>
            A propos
          </p>
        </Navbar.Link>
        <Navbar.Link herf="/Encadreur">
      
                      Devenir un encadreur
                      
        </Navbar.Link>
        <Navbar.Link href="/Form">
          Obtenir un Encardreur
        </Navbar.Link>
        <Navbar.Link href="https://wa.me/c/237691722067">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
       </header>
     
    
       </div>)
    
}

export default Navbars