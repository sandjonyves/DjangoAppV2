import { Link } from "react-router-dom"
import React from "react"
import { Button } from "flowbite-react"
function Bodybutton(params) {

      let but="text-white opacity-100 bg-blue-500 w-48 h-16 rounded-lg text-lg focus:shadow-outline"
       let StyleTd="space-x-10 space-y-20 max-[440px]:space-x-10 max-[440px]:space-y-1     w-[150px] h-[80px] text-center "
    
       const [showModal, setShowModal] = React.useState(false);
       const [showModals, setShowModals] = React.useState(false);
       const [showModalss, setShowModalss] = React.useState(false);
    
     
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
                       <div class="but" className={StyleTd} onClick={() => setShowModals(true) }> 
                       <Button className="w-full h-20" onClick={() => setShowModal(true)}>
                        obtenir de l'aide Gratuit
                        </Button> </div>
                    </td>
                </tr>
                <tr>
                   <td >
                   <div className={StyleTd}>
                    <Button  onClick={() => setShowModalss(true)}>
                      comment obtenir un encadreur
                      </Button></div> 

                    </td>
                   
                    <td >
                    <div className={StyleTd}>
                       
                        <Button className="h-20" > 
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
      {showModal  ?  (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold capitalize">
                    obtenir de l'aide gratuitement avec serad eduction 
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    nous vous aidons à voirs  tout les difficuletées dont rencontre votre enfant 
                    au niveau scolaire et en fonction des problemes  nous vous procurons des resolutions
                    strategiques et performentents   </p>            </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    fermer
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    
                  >
                    <Link to="https://wa.me/+237654340911">Consulter</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>


   {showModalss?(
    
 
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
                   comment Obtenir un encardreur en un instand avec Serad Education
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalss(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  
                  <div>
                    
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    1  cliquer sur le boutton obtnir 
                      </p> 

                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    2  suivre tout les etapes proposées par serad 
                      </p> 

                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    3  puis patienter quelques instants en fin de reçevoir le message de recption
                      </p> 
                  </div>
                             </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalss(false)}
                  >
                    fermer
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    
                  >
                    <Link to="/choose">obtenir</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
 
 )
:null}
 
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
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold
                     uppercase text-sm px-6 py-3 rounded shadow 
                     hover:shadow-lg outline-none focus:outline-none
                      mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    
                  >
                    <Link to="/Encardreur">devenir</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
 
 )
:null}

    </div>

    
       
    
)}

export default Bodybutton