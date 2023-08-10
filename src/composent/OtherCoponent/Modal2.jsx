'use client';

import { Alert, Button, Modal } from 'flowbite-react';

import Loading from './Loading';
import { HiInformationCircle } from 'react-icons/hi';

export default function Modal2({tabVars,openModal,setOpenModal,isLoading2,setIsLoading2}) {
  
  const props = { openModal, setOpenModal };


  
  return (
    <>
      
      <Modal dismissible show={ props.openModal==="dismissible"} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Serad Education</Modal.Header>
        <Modal.Body>
          <div  className="space-y-6">

       
            {tabVars.verify ?(<>
            
            <Alert>cliquer sur le button "finir" pour terminer votre requette</Alert>
            <Modal.Footer><Button onClick={() => props.setOpenModal(undefined)} id="butRequest" color="red" >
            Decline
          </Button>
           <a href="http://127.0.0.1:8000/" ><Button>Finir</Button></a>
           </Modal.Footer>
            
           </>
            ):(<><Alert  color="failure"
            icon={HiInformationCircle}>une erreur c'est produise veillez reesayé</Alert>
            <Modal.Footer>
         
          <Button onClick={() => props.setOpenModal(undefined)}  color="red" >
            Decline
          </Button>
          
        </Modal.Footer></>
            )}
           
            {isLoading2 &&  <Loading ></Loading>}
          </div>
        </Modal.Body>
        
      </Modal>
  
    </>
  )
}


