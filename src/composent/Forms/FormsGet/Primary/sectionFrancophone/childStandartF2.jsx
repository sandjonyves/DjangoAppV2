


function Matter2({tabVars,tabMatirePrimaire,tabFunction,registers }) {

 return<>  
 <div> 
    <div className={tabVars.font}>
   <form id = "form" className="w-screen h-screen  bg-gradient-to-r 
   from-cyan-500 to-blue-500 flex  justify-center items-center p-5 max-[500px]:h-[1000px] 
   flex 
   justify-center items-center ">
      <div className="card  md:w-[500px]
       w-[400px] max-[332px]:w-[300px]
         rounded-md shadow-md bg-white 
         h-auto rounded-md shadow-md
       bg-white p-2 md:my-5 md:mt-20 
       mt-[700px]">

      <h1 className={tabVars.StyleTitle}> CHOIX DES MATIERES</h1>
    
   
      <div className={tabVars.but}>
        {tabMatirePrimaire.map((element) => {
             return  <div className={tabVars.buts}>
             <label htmlFor={element} className={tabVars.Style}>
                {element}
                <input  type="checkbox"
                  id="checksM " class="checksMs"
                   onClick={tabFunction.radioValue2} 
                   {...registers("matiere")}  
                   value={element} 
                   className={tabVars.Styles}   /> 
             </label>
       
          </div>
        })}
   </div>

   <div>
      <div class={tabVars.ButValid}>
         <button  onClick={tabFunction.handleprev2}  class={tabVars.precButton} 
          type="button">
           prec
         </button>
         <button disable id="butNext2"   className=" bg-blue-500 hover:bg-blue-700 
         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-0
          " >
           suivant
         </button>
         
   </div>
   </div>
</div>
</form>
</div>
</div>
<div className={tabVars.font}></div>
    </> 

}

export default Matter2