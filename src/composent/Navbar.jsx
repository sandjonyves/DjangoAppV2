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
         
          href="/aPropos"
        >
          <p>
            A propos
          </p>
        </Navbar.Link>
        <Navbar.Link >
        <button  onClick={() => setShowModals(true)}>
                      devenir un encadreur
                      </button>
        </Navbar.Link>
        <Navbar.Link href="/Form">
          Obtenir un Encardreur
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
       </header>
      {showModals?(
    
 
        <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                  {/*content*/}
                  <div className="bg-gray-300 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold capitalize">
                       Comment devenir un encardreur en un instand chez Serad Education
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModals(false)}
                      >
                        <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      
                      <div>
                        
                      <p className="my-4 text-slate-500 text-lg  font-semibold  leading-relaxed">
                           Pour deninir un encadreur de serad il faut:
                           </p> 
                           <p className="my-4 mx-5 text-slate-500 text-lg leading-relaxed">-Remplir le formilaire proposé par Serad</p>
                           <p className="my-4 mx-5 text-slate-500 text-lg leading-relaxed">-Puis vous serez contacté par par le service de Serad</p>
                           <p className="my-4 mx-5 text-slate-500 text-lg leading-relaxed">-dés lors vous passerez un entretien soit en ligne ou 
                           dans l'un de nos centres à fin de juger vos competences</p>
    
                           <p className="my-4 mx-5 text-slate-500 text-lg leading-relaxed">
                            -Et en fin nos allons vous présentez le reglement et les modalitées
                           </p>
     
                      </div>
                                 </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModals(false)}
                      >
                        fermer
                      </button>
                      <Link to="/Encardreur"><button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold
                         uppercase text-sm px-6 py-3 rounded shadow 
                         hover:shadow-lg outline-none focus:outline-none
                          mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        
                      >
                        devenir
                      </button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
     
     )
    :null}
       
    
       </div>)
    
}

export default Navbars