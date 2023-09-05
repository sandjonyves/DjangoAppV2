import { useState } from "react";
import { Link ,Navigate,useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import axios from 'axios'
import Matter from "./childStandartF";
import Price from "./childForPriceF";
import Price2 from "./childForPriceF2";
import Matter2 from "./childStandartF2";
import React from 'react'
import Modal2 from "../../../../OtherCoponent/Modal2";




function ChooseStandard(){

  //initiallisation des outils de gestion des formilaires de react js
   const {handleSubmit,register,formState: {errors}} = useForm()


   const history = useNavigate();
   // const faireRedirection = () =>{ 
   //   let url = "";
   //   history(url);}
   // //  
   // const pattern = /^6[0-9]{8}$/

   // const veryf = () => {
   //    var a = document.getElementById('butNext');
   //    a.addEventListener("click",{handleNext});
   // }

   //declaration of constate who will be use to change form


   const [allData,setAllData] = useState([])
   


   const formArray  =[1,2,3,4,5,6,7];
   const [formNo,setFormNo] = useState(formArray[0]);
   const formArray3  =[1];
   const [formNo3,setFormNo3] = useState(formArray3[0]);


   const formArray2  =[1,2,3,4,5,6,7];
   const [formNo2,setFormNo2] = useState(formArray2[0])

  
   //incrrmentation ou decrementation de fomno pour afficher chaque forùulaire
   const handleNext = () =>{
       
       setFormNo(formNo + 1)
   }
   const handleprev = (tab,tabs) =>{
       
       setFormNo(formNo -1 )
   }

  
   const handleNext2 = () =>{
       setFormNo2(formNo2 + 1)
   }
  
   const handleprev2 = () =>{
       setFormNo2(formNo2 -1 )
   }
  
   const ctl = () => {
      var a=  document.querySelector("#formctl")
      a.className="hidden"
     }
     const ctl2 = () => {
        var a=  document.querySelector("#formctl")
        a.className=""
       }
    
       //gestion de la permutation entre le primaire et secondaire
     function all() {
        handleNext()
        ctl()
       
     }
     function all1() {
      handleNext2()
      ctl()
     
   }
     function all21() {
        handleprev2()
        
     } 
     function all2() {
      handleprev()
      ctl2()
      
   }
      
   const change = () => {
      var checkboxes2 = document.querySelectorAll('input[type="radio"]');
      var b =document.querySelector("#butNext2");
      let verif=false;
      let index = 0
      
     
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
            
           
            
        handleNext();
      
        
        });
         
      }else{
         
         //b.disable=true;
         b.className="bg-white text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
         b.addEventListener('click', (event) => {
             
            
            b.className="bg-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
   
   
           });
      }
     
    }
   
    const change2 = () => {
      var checkboxes2 = document.querySelectorAll('input[type="radio"]');
      var b =document.querySelector("#butNext2");
      let verif=false;
      let index = 0
      
    
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
            
           
            
        handleNext2();
      
        
        });
         
      }else{
         
         //b.disable=true;
         b.className="bg-white text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
         b.addEventListener('click', (event) => {
             
            
            b.className="bg-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
   
   
           });
      }
     
    }
   
  
  const radioValue = () => {
   
 

      var checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
   var b =document.querySelector("#butNext");
   let verif=false;
   let index = 0
   const tab =[...allData]


   while( index < checkboxes2.length) {
    
      
      const element = checkboxes2[index].checked;
      
     
      if (element) {
         

         verif=true;
         
         tab.push(checkboxes2[index].value)
     
         
      }
      index++;
   }
 
 
   if (verif) {
    
      
     b.removeAttribute("disable");
     // b.disabled=false;
     
     b.className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      b.addEventListener('click', (event) => {
         
        
      handleNext();
      
      
     });
      
   }else{
      
      //b.disable=true;
      b.className="bg-white text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      b.addEventListener('click', (event) => {
          
         
         b.className="bg-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "


        });

   
  
 }


 
 
}


 
 const radioValue2 = () => {
   var checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
   var b =document.querySelector("#butNext2");
   let verif=false;
   let index = 0

   while( index < checkboxes2.length) {
    
      
      const element = checkboxes2[index].checked;
      
      index++;
      if (element) {
         verif=true;
        
      }
   }
 
 
   if (verif) {
      
     
     b.removeAttribute("disable");
     // b.disabled=false;
    
     b.className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      b.addEventListener('click', (event) => {
         let i = 0;
         
      handleNext2();
   
     
     });
      
   }else{
      
      //b.disable=true;
      b.className="bg-white text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      b.addEventListener('click', (event) => {
          
         
         b.className="bg-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "


        });
   }
  
 }
 


 
const priceAll = (data) => {
//    let i = 0;
//    let count =0
//       let price = 0;
//       alert(price);
//    const tabMatirePrimaire = ["matematique","science" , "hist/geo/Ecm","Français","anglais","LCN(langue et culture nationnal)"];
//   for (let index = 0; index < tab.length; index++) {
 
//    for(let j =0;j<day.length;j++){
      
//       if(tab[index]==day[j]){
//          count++
         
//       }
//    }
   
//   }
//    tab.forEach((element)=>{
      
//       if (element==data[i]) {
//          price+=value*1050; 
       

         
//       }
//       i++;
     
//     })     

//    price = count*price
//    alert(price)
let count =0
      var price = 0;
      var priceMatter =0
      let verif = false
      
  for (let index = 0; index < data.day.length; index++) {
 
       count++
         
      
   }
 
   for (let index = 0; index < tabClass.length; index++) {
      
      const element = tabClass[index];
      
      const a =element.localeCompare(data.class)
     
     if(a ==0){
      priceMatter = 1000  
      verif = true 
     
   }
}

if (verif==true) {
   const matiere = data.matiere
   for (let index = 0; index < matiere.length; index++) {
         
      price+=data.hour*priceMatter;
    }
   price = count*price
   
} else{
            
       for (const iterator of firstCycle) {
              
         if(iterator==data.class){
            priceMatter=1450
         }
         
       }
       for (const iterator of secondCycle) {

         if(iterator==data.class){
            priceMatter=1450
         }
         
       } for (const iterator of thirdCycle) {

         if(iterator==data.class){
            priceMatter=1650
         }
        
       }
       const matiere = data.matiere
       for (let index = 0; index < matiere.length; index++) {
         
         price+=data.hour*priceMatter;
       }
       
      price = count*price
   
}
const tab =[priceMatter,price*4]

return tab
 } 

//   const Mail = () => {

//    let but = document.querySelector("#butRequest")
//    let newBut = document.querySelector("#cont")
//    let newMsg = document.createElement("p")
//    newMsg.textContent="cliquer sur le bouton pour finir votre demande "
//    newBut.append(newMsg)
//    but.removeAttribute("disable")
//    newBut.className="text-green-600  capitalyse"
   
//    but.className="bg-blue-500 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"

//    // b.disabled=false;
   
   
//    but.addEventListener("click",()=>{
     
//        but.setAttribute("href"," http://127.0.0.1:8000/")
//        console.log(but)
//    })
//   }

const [isLoading,setIsLoading] = useState(false)
const [isLoading2,setIsLoading2] = useState(false)
const [openModal, setOpenModal] = useState('')
const props = { openModal, setOpenModal };

const [verify, setVerify] = useState(2)
const onSubmit = (data) => {
  
 const tab =  priceAll(data)

//   let but = document.querySelector("#butMail")
//   but.removeAttribute("disable");
//   // b.disabled=false;
  
//   but.className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
  

 

   
   setIsLoading(true)

   setIsLoading2(true)
  props.setOpenModal('dismissible') 


   axios ({
      method:'post',
      url:"https://testdjango-eight.vercel.app/data/add",
      data:{
         'name':data.name,
        'ville':data.ville,
         'quartier':data.street,
         'niveau':data.niveau,
         'classe':data.class,
         'matiere':data.matiere.join(";"),
         'jours':data.day.join(";"),
         'heure':data.hour,
         'numTel':data.number,
          'addEmail':data.email,
          'addresse':data.street,
         'taux':tab[1],
          'Price':tab[0]
      }
   }).then((res) =>{
      
       setVerify(1)
  
       setIsLoading2(false)

      
   setIsLoading2(false)    
   }).catch((res) =>{
      
      setVerify(0)
      setIsLoading2(false)
      // props.setOpenModal(undefined) 
   })




}

let ButValid ="md:space-x-20 space-x-10   mt-10  text-center md:items-center justify-between "
let precButton = "bg-blue-500 hover:bg-blue-700 text-white font-bold md:ml-0 ml-[-30px] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
let Style = "m-0 opacity-50 sm:text-xl text-lg h-auto w-auto  hover:bg-blue-200 focus:bg-red-400"
let Styles = "ml-5   text-sm  md:text-lg "
let but = "flex flex-col mt-5 ml-5 space-y-4  h-auto  w-auto   md:ml-10 md:mr-10 border-2 border-slate-300 mr-10  "
let buts = "flex flex-col mt-5 ml-5 space-y-4  h-auto  w-auto   md:ml-10 md:mr-10 border-2 border-slate-300 mr-10 "
let font = "w-screen h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center"
let font2 = "w-auto h-auto  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center"
let StylePev = " bg-blue-500 font-bold py-2 h-auto w-40 mb-5  px-4 rounded focus:outline-none text-white focus:shadow-outline hover:bg-blue-700"
let StyleTitle = "capitalize text-center text-xl bg-blue-500 text-white "

const  tabClass = ["SIL" ,"CP" , "CE1", "CE2", "CM1", "CM2"];
const tabMatirePrimaire = ["matematique","science" , "hist/geo/Ecm","Français","anglais","LCN(langue et culture nationnal)"];
const tabClassSecondaire = ["6eme","5eme","4eme","3eme","2nd","1ere","Tel"];
const firstCycle = ["6eme","5eme"]
const secondCycle =["4eme","3eme"]
const thirdCycle = ["2nd","1ere","Tel"]
const  tabMatiereSecondaireLiteraire = ["Mathematique","Physique","Chimie","Svt","Informatique","Philosophie" ,"Français","Aglais","LCN(langue et culture nationnal)","HistGeo/Ecm", "Autres Langues(Latin,Chinoir,Espagniol,Allemang ...)"]
//empoyement the child components
 
const tabVar= {verify,font2,font,ButValid,precButton,font,StyleTitle,Styles,buts,StylePev}
const tabFunction = {radioValue,handleprev,handleNext,all2}
const tabFunction2 = {radioValue2,handleprev2,handleNext2,all21}

const registers= (data)=>{return {...register(data)}}


  return<><div id ="container"  className="pt-15 "  onSubmit={handleSubmit(onSubmit)}>

  
  
{/* formulaire des eleves de l'ecole primaire  */}
{


formNo2 === 1  && <div id="formctl" className="">
   <div className={font}>
   <div className="card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  rounded-md shadow-md bg-white   ">
   <h1 className={StyleTitle}>CHOIX DU NIVEAU </h1>
      <div className={but}  >
        
        <button type="button" 
             onClick={all} 
             className={Style} 
             value="primaire"
              {...register("niveau")}>
                primaire
              </button>
      </div>

      <div className={but} >
        
      <button type="button" 
             onClick={all1} 
             className={Style} 
             value="secondaire" 
             {...register("niveau")}>
               secondaire
             </button>
 </div>
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
{/* <button onClick={handleNext}  class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
prev
</button> */}
       <Link to="/form"><button   
         className={StylePev}>
             <div className="">prec</div>
        </button> </Link>
       
</div>
</div>
</div>
 
</div>


}
{

formNo === 2 && <div>
<div className={font}>
<div className="card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  rounded-md shadow-md bg-white   ">
     
      <h1 className={StyleTitle}>
         Choix de la classe 
      </h1>
   
      <div className={but} >
         {tabClass.map((element) =>{
              return   <div className={buts}><label htmlFor={element} className={Style}>
              {element} 
              <input  type="radio" 
               class="checksMs"
                onClick={change} 
                {...registers("class")} 
                 value={element} 
                 className={Styles}   /> 
           </label>
           </div>
         })}
     </div>
   
   <div>
      <div class={ButValid}>
         <button  onClick={all2} 
          className={precButton} 
           
        
          type="button">
           prec
         </button>
         <button disable id="butNext2"  
          className=" bg-blue-500 hover:bg-blue-700 

         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-0
          " >
           suivant
         </button>
         
   </div>
 </div>
</div>
</div>  
</div>
}


{formNo === 3&&  <div>
{/* <div ><Matters tabVars={tabVar} tabMatirePrimaire={tabMatirePrimaire} tabFunction = {tabFunction} registers={registers}/>

khjhjhjhjh</div> */}

<Matter tabVars={tabVar} tabMatirePrimaire={tabMatirePrimaire} tabFunction = {tabFunction} registers={registers}/>


</div>
// </div>

}
{
   <Price data={allData} tabVars={tabVar} tabMatirePrimaire={tabMatirePrimaire} tabFunction = {tabFunction} registers={registers} formNo={formNo}></Price>
}
{
   formNo === 6 && <div>
      <div className={font} > 

    
<form className="card w-[375px] rounded-md shadow-md bg-white p-5 ">
      <div className="flex flex-col mb-2 ">
         <div className="text-center"> <h1 htmlFor="how can we joint you text-center"
          className={StyleTitle}>Comment pouvons nous vous contacté </h1>
         </div>
         <label htmlFor="name " className="">Nom</label>
         <input type="text" className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="Serad education"  {...register("name",{required:true,
         minLength:2}
         )} />
        {errors.name && <p className="text-red-300">champ vide </p>}
      </div>
      
      <div className="flex flex-col mb-2 ">
         <label htmlFor="what is your number phone" className=""> numero de telephone</label>
         
        {/* prefice un champ */}
         <input type="text" placeholder="691722067"  className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md"  
           {...register("number", {
            required: true,
            maxLength:9 ,
            pattern:/^6[0-9]/ ,
            minLength:9
          
          })}
           
           />
            {errors.number && errors.number.type ==="maxLength" ?(
               //  {veryf},
              <p className="text-red-300"> overflow number</p>):
              errors.number && errors.number.type ==="minLength" ?(
               //  {veryf},
              <p className="text-red-300"> you haven't  recht the minimum of number </p>):
              true
              }
              {errors.number && errors.number.type ==="pattern" &&(
               //  {veryf},
              <p className="text-red-300"> le numeros doit commencer par 6</p>)}
            {errors.number && errors.number.type ==="required" &&<p className="text-red-300"> champ vide</p>}
      </div>
      <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Où habite votre enfant " className=""> Adresse email</h1>
         <input type="text" 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="serad.education@gmail.com" 
         {...register("email",{
            required:true,
            pattern : /^([a-z]||[0-9])/
         })}
         />
          {errors.email && errors.email.type ==="pattern" &&(
               //  {veryf},
              <p className="text-red-300"> verifier l'adresse email</p>)}
            {errors.email && errors.email.type ==="required" &&<p className="text-red-300"> champ vide</p>}
     
      </div>

      <div className="flex flex-col mb-2 ">
      <h1 htmlFor="ville de residence " className="">Ville de residence </h1>
         <input type="text" 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder=" yaounde " 
         {...register("ville",{
            required:true})}
         />
         {errors.street && <p className="text-red-300">empty field </p> }
      </div>

      <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Où habite votre enfant " className=""> Où habite votre enfant </h1>
      <select 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder=" yaounde " 
         {...register("ville",{
            required:true})}
         >
            <option>yaounde</option>
            <option>Douala</option>
         </select>
         {errors.street && <p className="text-red-300">empty field </p> }
      </div>
      <div>
         
      <div class={ButValid}>
         <button onClick={handleprev} id = "prc" class={precButton} 
          type="button">
           prec
         </button>
         <button  class="butNexts" id = "butNextAll"   className=" bg-blue-500 hover:bg-blue-700 
         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
          " type = "submit"  >
           suivant
         </button>
         {props.openModal === 'dismissible' && 
   <Modal2 tabVars={tabVar} openModal={openModal} setOpenModal={setOpenModal} isLoading2={isLoading2} setIsLoading2={setIsLoading2}/>

 }
   </div>

         
   </div>

</form>
</div>
</div>
}



{/* ////////////////formilaire du niveau secondaire/////// */}


{
formNo2 === 2 && <div>
   <div className={font}>
   <div className="card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  rounded-md shadow-md bg-white mt-48  ">
        
         <h1 className={StyleTitle}>
            Choix de la classe
         </h1>
         
         
      <div className={but} >
         {tabClassSecondaire.map((element) =>{
              return   <div className={buts}><label htmlFor={element} className={Style}>
              {element} 
              <input  type="radio" 
               class="checksMs"
                onClick={change2} 
                {...registers("class")} 
                 value={element} 
                 className={Styles}   /> 
           </label>
           </div>
         })}
     </div>
   
   <div>
      <div class={ButValid}>
         <button  onClick={all21} 
          className={precButton} 
           
        
          type="button">
           prec
         </button>
         <button disable id="butNext2"  
          className=" bg-blue-500 hover:bg-blue-700 

         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-0
          " >
           suivant
         </button>
         
   </div>
 </div> 
    </div>
   </div>
   <div className={font}></div>
</div>  


}


{/* {



} */}

{formNo2 === 3&& <div ><Matter2 tabVars={tabVar} tabMatirePrimaire={tabMatiereSecondaireLiteraire} tabFunction = {tabFunction2} registers={registers}/>
</div>}
{
   <Price2 data={allData} tabVars={tabVar} tabMatirePrimaire={tabMatirePrimaire} tabFunction = {tabFunction2} registers={registers} formNo={formNo2}/>
}
{
   formNo2 === 6 && <div>
   <div className={font} > 

 
<form className="card w-[375px] rounded-md shadow-md bg-white p-5 ">
   <div className="flex flex-col mb-2 ">
      <div className="text-center"> <h1 htmlFor="how can we joint you text-center"
       className={StyleTitle}>Comment pouvons nous vous contacté </h1>
      </div>
      <label htmlFor="name " className="">Nom</label>
      <input type="text" className="p-2 border boder-slate-400 mt-1 outline-0
      rounded-md" placeholder="Serad education"  {...register("name",{required:true,
      minLength:2}
      )} />
     {errors.name && <p className="text-red-300">champ vide </p>}
   </div>
   
   <div className="flex flex-col mb-2 ">
      <label htmlFor="what is your number phone" className=""> Numero de telephone</label>
      
     {/* prefice un champ */}
     <select 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder=" yaounde " 
         {...register("ville",{
            required:true})}
         >
            <option>yaounde</option>
            <option>Douala</option>
         </select>
         {errors.number && errors.number.type ==="maxLength" ?(
            //  {veryf},
           <p className="text-red-300"> overflow number</p>):
           errors.number && errors.number.type ==="minLength" ?(
            //  {veryf},
           <p className="text-red-300"> you haven't  recht the minimum of number </p>):
           true
           }
           {errors.number && errors.number.type ==="pattern" &&(
            //  {veryf},
           <p className="text-red-300"> le numeros doit commencer par 6</p>)}
         {errors.number && errors.number.type ==="required" &&<p className="text-red-300"> champ vide</p>}
   </div>
   <div className="flex flex-col mb-2 ">
   <h1 htmlFor="Où habite votre enfant " className=""> Adresse email</h1>
      <input type="text" 
      className="p-2 border boder-slate-400 mt-1 outline-0
      rounded-md" placeholder="serad.education@gmail.com" 
      {...register("email",{
         required:true,
         pattern : /^([a-z]||[0-9])/
      })}
      />
       {errors.email && errors.email.type ==="pattern" &&(
            //  {veryf},
           <p className="text-red-300"> verifier l'adresse email</p>)}
         {errors.email && errors.email.type ==="required" &&<p className="text-red-300"> champ vide</p>}
  
   </div>
   <div className="flex flex-col mb-2 ">
      <h1 htmlFor="ville de residence " className="">Ville de residence </h1>
         <input type="text" 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder=" yaounde " 
         {...register("ville",{
            required:true})}
         />
         {errors.street && <p className="text-red-300">empty field </p> }
      </div>

   <div className="flex flex-col mb-2 ">
   <h1 htmlFor="Où habite votre enfant " className=""> Où habite votre enfant </h1>
      <input type="text" 
      className="p-2 border boder-slate-400 mt-1 outline-0
      rounded-md" placeholder="Cradat yaounde " 
      {...register("street",{
         required:true})}
      />
      {errors.street && <p className="text-red-300">empty field </p> }
   </div>
   <div>

      
   <div class={ButValid}>
      <button onClick={handleprev2} id = "prc" class={precButton} 
       type="button">
        prec
      </button>
      <button  class="butNexts" id="butNext"   className=" bg-blue-500 hover:bg-blue-700 
      text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
       " type = "submit"  >
        suivant
      </button>
</div>
<a disable id="butMail" 
       className=" bg-blue-500 hover:bg-blue-700 
         w-full text-white opacity-0 
          font-bold py-2 my-2 px-4
           rounded focus:outline-none 
           focus:shadow-outline 
          " >
           Finir</a>
         
         
</div>
{props.openModal === 'dismissible' && 
   <Modal2 tabVars={tabVar} openModal={openModal} setOpenModal={setOpenModal} isLoading2={isLoading2} setIsLoading2={setIsLoading2}/>

 }

</form>
</div>
</div>
}
   </div></> 
}


export  default ChooseStandard