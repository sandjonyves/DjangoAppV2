'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import Loading from './Loading';

export default function Modal2({tabVars,showModal,setShowModal,isLoading2,setIsLoading2}) {
  const [openModal, setOpenModal] = useState('dismissible')
  const props = { openModal, setOpenModal };

  if (tabVars.verify) {

    const msg = "une erreur c'est produise "
  
     
 let but = document.querySelector("#butRequest")
 let newBut = document.querySelector("#cont")
 let newMsg = document.createElement("p")
 newMsg.textContent="cliquer sur le bouton pour finir votre demande "
 //newBut.append(newMsg)
 but.removeAttribute("disable")
 //newBut.className="text-green-600  capitalyse"
 
 but.className="bg-blue-500 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"

 // b.disabled=false;
 
 
 but.addEventListener("click",()=>{
   
     but.setAttribute("href"," http://127.0.0.1:8000/")
     console.log(but)})
    
  }else{
    const msg = "une erreur c'est produise "
  
   

 let but = document.querySelector("#butRequest")
 let newBut = document.querySelector('p[id="cont"]')
 let newMsg = document.createElement("p") 
 //newMsg.textContent="une Erreur c'est produise nous sommes desolé    '''veillez réessaiyé''' "
 //newBut.append(newMsg)

 newBut.className="text-red-600  capitalyse"
 
 but.className="bg-blue-100 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"

 // b.disabled=false;
 
 

    setIsLoading2(false)
 

  }

  return (
    <>
      {showModal ? (
      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div  className="space-y-6">
            <p id="cont" className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
              ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
              possible of high-risk data breaches that could personally affect them.
            </p>
            {isLoading2 &&  <Loading ></Loading>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
          <Button disable id="butRequest" color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>):null}
    </>
  )
}


