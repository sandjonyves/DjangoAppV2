function Price2({data,tabVars,tabFunction,registers,formNo }) {
    
   let day = ["Monday","Turday","Wednesday","Thursday","Fryday","Satusday","Sunday"]
   let hour = [1,1.5,2,2.5,3]



const change = () => {
   var checkboxes2 = document.querySelectorAll('input[type="radio"]');
   var b =document.querySelector("#butNext2");
   let verif=false;
   let index = 0
   
  console.log(data)
   while( index < checkboxes2.length) {
    
      
      const element = checkboxes2[index].checked;
      
      
      if (element) {
         verif=true;
         
          
      }
      index++;
   }
 
 
   if (verif) {
     
     b.removeAttribute("disable");
     // b.disabled=false;
     
     b.className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      b.addEventListener('click', (event) => {
        
         
     tabFunction.handleNext2();
   
     
     });
      
   }else{
      
      //b.disable=true;
      b.className="bg-white text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      b.addEventListener('click', (event) => {
          
         
         b.className="bg-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "


        });
   }
  
 }


 
return <div> {

    formNo === 4 && <div>
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
       bg-white p-2 md:my-5 
       mt-20">   <h1 className={tabVars.StyleTitle}>choice of number day</h1>
    
   
   <div>
        {day.map((element) => {
             return  <div className={tabVars.buts}>
             <label htmlFor={element} className={tabVars.Style}>
                {element}
                <input  type="checkbox"  
                id="checksM" class="checksMs"
                 onClick={tabFunction.radioValue2} {...registers("day")}  value={element} className={tabVars.Styles}   /> 
             </label>
       
          </div>
        })}
   </div>

   <div>
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
         <button  onClick={tabFunction.handleprev2}  class=" bg-blue-500 hover:bg-blue-700 text-white
          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button">
           prev
         </button>
         <button disable id="butNext2"  
          className=" bg-blue-500 hover:bg-blue-700 

         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-0
          " >
           next
         </button>
         
   </div>
   </div>
</div>
</form>
</div>
</div>
    </div>  
    
    }
    {

        formNo === 5 && <div>
        <div className={tabVars.font}>
        <form id = "form" className="w-screen h-screen  bg-gradient-to-r 
   from-cyan-500 to-blue-500 flex  justify-center items-center p-5 max-[500px]:h-[1000px] 
   flex 
   justify-center items-center ">
 <div className="card  md:w-[500px] 
   w-[400px] max-[332px]:w-[300px] 
    rounded-md shadow-md bg-white 
       h-auto rounded-md shadow-md 
       bg-white p-2 md:my-5 
       mt-20">
             
              <h1 className={tabVars.StyleTitle}>
                choice of number of hours
              </h1>
           
              <div className={tabVars.but}>
                 {hour.map((element) =>{
                      return  <div className={tabVars.buts}>
                      <label htmlFor={element} className={tabVars.Style}>
                         {element} h
                         <input  type="radio" 
                          class="checksMs"
                           onClick={change} 
                           {...registers("hour")} 
                            value={element} 
                            className={tabVars.Styles}   /> 
                      </label>
                
                   </div>
                 })}
             </div>
             <div>
             <div class={tabVars.ButValid}>
         <button  onClick={tabFunction.handleprev}  class={tabVars.precButton} 
          type="button">
           prev
         </button>
         <button disable id="butNext2"   className=" bg-blue-500 hover:bg-blue-700 
         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-0
          " >
           next
         </button>
         
   </div>
   </div> 
         </div>
         </form>
        </div>
        </div>  
        
        }
    </div>
}

export default Price2