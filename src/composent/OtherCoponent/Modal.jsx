import React from "react";
import Loading from "./Loading";
import "./modal.css"



export default function Modal({showModal,setShowModal,isLoading2,setIsLoading2}) {


  
  return (
    <>
      
<div>

      {showModal ? (
        <>
          <div
            className="my-48 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 bg-red-500 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg bg-red-400 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between  p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Serad Education
                  </h3>
                 
                </div >
                <div className="relative p-6 flex-auto">
                  <p id = "cont" className="my-4 text-slate-500 text-lg leading-relaxed"></p></div>
                
                {/*body*/}
                {isLoading2 &&  <Loading ></Loading>}
                
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <a disable id="butRequest"
                    className="bg-blue-100 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    
                  >
                   Finir
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
</div>



    </>
  );
}

