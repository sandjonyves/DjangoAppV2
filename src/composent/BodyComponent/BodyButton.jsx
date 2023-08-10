import { Link } from "react-router-dom"
import React, { useState } from "react"
import { Button,Modal } from "flowbite-react"
function Bodybutton(params) {

      let but="text-white opacity-100 bg-blue-500 w-48 h-16 rounded-lg text-lg focus:shadow-outline"
       let StyleTd="space-x-10 space-y-20 max-[440px]:space-x-10 max-[440px]:space-y-1     w-[150px] h-[80px] text-center "
    
       const [showModal, setShowModal] = React.useState(false);
       const [showModals, setShowModals] = React.useState(false);
       const [showModalss, setShowModalss] = React.useState(false);
       const [openModal, setOpenModal] = useState('dismissible')
       const props = { openModal, setOpenModal };

       const [openModals, setOpenModals] = useState('dismissible')
       const props1 = { openModals, setOpenModals};
    
       const [openModalss, setOpenModalss] = useState('dismissible')
       const props2 = { openModalss, setOpenModalss};
    
     
       return(
    <div>

        {/* <div className=" md:mt-[300px] mt-[200px] h-[300px]">
            <div class="table w-full  bg-sky-300  absolute h-full border">
 
                <div class="table-row h-[100px]">
                    <div className="table-coll">

                    </div>
      
                </div>
    
            </div>
        </div> */}
        <table className="px-auto table-auto relative  h-[200px] w-[350px]
" >

            <tbody>
                <tr>
                    <td className="">
                    <Link to="/bon"> <div className={StyleTd}> <Button size="lg" >
                    bon à savoir
                        </Button></div>
                        
                        
                        
                        </Link>
                     
                    </td>
                    
                    <td >
                       <div class="but" className={StyleTd} > 
                       <Button className="w-full h-20" onClick={() => {
                        props.setOpenModal('dismissible')
                        setShowModal(true)}}>
                        obtenir de l'aide Gratuit
                        </Button> </div>
                    </td>
                </tr>
                <tr>
                   <td >
                   <div className={StyleTd}>
                    <Button  onClick={() => {
                      props1.setOpenModals('dismissible')
                      setShowModalss(true) }}>
                      comment obtenir un encadreur
                      </Button></div> 

                    </td>
                   
                    <td >
                    <div className={StyleTd}>
                       
                        <Button className="h-20" onClick={() => {
                           props2.setOpenModalss('dismissible')
                          setShowModals(true) }} > 
                             devinir un encadreur
                        </Button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>



        <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      {showModal ?  (
        <>
        <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>   <h2>
          obtenir de l'aide gratuitement avec serad eduction </h2></Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
         
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             
              
        
         
            nous vous aidons à voirs  tout les difficuletées dont rencontre votre enfant 
                    au niveau scolaire et en fonction des problemes  nous vous procurons des resolutions
                    strategiques et performentents 
            
            </p>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to="https://wa.me/c/237691722067">
          <Button  >
            obtenir de l'aide
          </Button>
          </Link>
          <Button color="red" className="bg-red-400" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
          
        </>
      ) : null}
    </>


   {showModalss?(
    
 
    <>
          {/* <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
             

          <Modal dismissible show={props1.openModals === 'dismissible'} onClose={() => props1.setOpenModals(undefined)}>
        <Modal.Header>comment Obtenir un encardreur en un instand avec Serad Education</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <h2>
          obtenir de l'aide gratuitement avec serad eduction </h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             
              
        
           
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    1  cliquer sur le boutton obtenir 
                      </p> 

                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    2  suivre tout les etapes proposées par serad 
                      </p> 

                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    3  puis patienter quelques instants en fin de reçevoir le message de recption
                      </p> 
            
            </p>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          
          <Button color="red" className="bg-red-400" onClick={() => props1.setOpenModals(undefined)}>
            Decline
          </Button>
          <Link to="/choose"> <Button >obtenir</Button></Link>
        </Modal.Footer>
      </Modal>
        </>
 
 )
:null}
 
 {showModals?(
    
 
    <>

          <Modal dismissible show={props2.openModalss === 'dismissible'} onClose={() => props2.setOpenModalss(undefined)}>
        <Modal.Header>   Comment devenir un encardreur en un instand chez Serad Education</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
       
          
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
        </Modal.Body>
        <Modal.Footer>
          
          
          <Button color="red" className="bg-red-400" onClick={() => props2.setOpenModalss(undefined)}>
            Decline
          </Button>
          <Link to="/Encardreur"> <Button >Devenir</Button></Link>
        </Modal.Footer>
      </Modal>
          
        </>
 
 )
:null}

    </div>

    
       
    
)}

export default Bodybutton