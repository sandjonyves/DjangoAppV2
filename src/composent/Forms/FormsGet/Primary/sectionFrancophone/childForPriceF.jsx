function Price({data,tabVars,tabFunction,registers,formNo }) {
    
let day = ["Lundi","Mardi","mecredi","Jeudi","vendredi","samedi","dimanche"]
let hour = [1,1.5,2,2.5,3]

const onValue = () =>{

  let valCheck=  document.querySelectorAll('input[type="checkbox"]')
  let valHour = document.querySelector('butHour')  
  let count=0

  alert(valHour.inn)
  alert('dsdsdsds')
  valCheck.forEach(element => {
    
     if (element.checked) {
        count++
       alert(element.value)
     }    
  });

  
}

const priceAll = (tab,value) => {
   let i = 0;
   let count =0
      let price = 0;
      alert(price);
   const tabMatirePrimaire = ["matematique","science" , "hist/geo/Ecm","Français","anglais","LCN(langue et culture nationnal)"];
  for (let index = 0; index < tab.length; index++) {
 
   for(let j =0;j<day.length;j++){
      
      if(tab[index]==day[j]){
         count++
         
      }
   }
   
  }
   tab.forEach((element)=>{
      
      if (element==data[i]) {
         price+=value*1050; 
       

         
      }
      i++;
     
    })     

   price = count*price
   alert(price)
 }

const change = () => {
   var checkboxes2 = document.querySelectorAll('input[type="radio"]');
   var b =document.querySelector("#butNext");
   let verif=false;
   let index = 0
   
  console.log(data)
   while( index < checkboxes2.length) {
    
      
      const element = checkboxes2[index].checked;
      
      
      if (element) {
         verif=true;
         var value=checkboxes2[index].value
         
          
      }
      index++;
   }
 
 
   if (verif) {
     
     b.removeAttribute("disable");
     // b.disabled=false;
     
     b.className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      b.addEventListener('click', (event) => {
         let i = 0;
        
         
     tabFunction.handleNext();
   
     
     });
      
   }else{
      
      //b.disable=true;
      b.className="bg-white text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      b.addEventListener('click', (event) => {
          
         
         b.className="bg-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "


        });
   }
  
 }


 
return <div>
   
    {
   
    formNo === 4 && <div>
    <div> 
    <div className={tabVars.font}>
   <form id = "form" className="w-screen h-screen  bg-gradient-to-r 
   from-cyan-500 to-blue-500 flex  justify-center items-center p-5 max-[500px]:h-[1000px] 
   flex 
   justify-center items-center ">
   <div className="card w-[500px]    h-auto rounded-md shadow-md bg-white p-5 my-10">
      <h1 className={tabVars.StyleTitle}>choix du nombre de jour</h1>
    
   
   <div>
        {day.map((element) => {
             return  <div className={tabVars.buts}>
             <label htmlFor={element} className={tabVars.Style}>
                {element}
                <input  type="checkbox"  id="checksM" class="checksMs"
                 onClick={tabFunction.radioValue} {...registers("day")}  value={element} className={tabVars.Styles}   /> 
             </label>
       
          </div>
        })}
   </div>

   <div>
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
         <button  onClick={tabFunction.handleprev}  class=" bg-blue-500 hover:bg-blue-700 text-white
          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button">
           prec
         </button>
         <button disable id="butNext"  
          className=" bg-blue-500 
          hover:bg-blue-700 
         text-white  font-bold py-2 px-4 
         rounded focus:outline-none 
         focus:shadow-outline opacity-0
          " >
           suivant
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
        <div className="card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  
        rounded-md shadow-md bg-white  my-20">
             
              <h1 className={tabVars.StyleTitle}>
                choix du nombre d'heure
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
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
         <button  onClick={tabFunction.handleprev}  class=" bg-blue-500 hover:bg-blue-700 text-white
          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button">
           prec
         </button>
         <button disable id="butNext"  
          className=" bg-blue-500 
          hover:bg-blue-700 
         text-white  font-bold 
         py-2 px-4 rounded focus:outline-none 
         focus:shadow-outline opacity-0
          " >
           suivant
         </button>
         
   </div>
   </div> 
         </div>
        </div>
        </div>  
        
        }
    </div>
}

export default Price