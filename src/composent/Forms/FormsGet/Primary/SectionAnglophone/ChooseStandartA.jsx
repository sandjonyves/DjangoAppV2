import { useState } from "react";
import { Link ,Navigate,useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import axios from 'axios'
import BodyTextTwo from "../../../../BodyComponent/BodyTextTwo";
import Bodybutton from "../../../../BodyComponent/BodyButton";
import Matter from "./childStandartF";
import Price from "./childForPriceF";
import Price2 from "./childForPriceF2";
import Matter2 from "./childStandartF2";
import Modal from "../../../../OtherCoponent/Modal";



function ChooseStandard(props){

  //initiallisation des outils de gestion des formilaires de react js
   const {handleSubmit,register,formState: {errors}} = useForm()


   const history = useNavigate();
   const faireRedirection = () =>{ 
     let url = "";
     history(url);}
   //  
   const pattern = /^6[0-9]{8}$/

   const veryf = () => {
      var a = document.getElementById('butNext');
      a.addEventListener("click",{handleNext});
   }

   //declaration of constate who will be use to change form

   const [datas,setData] = useState([]) 
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

   const handleNext3 = () =>{
       
      setFormNo(formNo3 + 1)
  }
  const handleprev3 = () =>{
      
      setFormNo(formNo3 -1 )
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
        ctl2()
     } 
     function all2() {
      handleprev()
      ctl2()
      radioValue()
   }
      
  
  const [allCount,setAllCount]=useState(0)
  
  
  const radioValue = () => {
   
 

      var checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
   var b =document.querySelector("#butNext");
   let verif=false;
   let index = 0
   const tab =[...allData]
   const tabs =[...allData]

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
         let i = 0;
        
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
    let tab =[];
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
          
         
         b.className="text-white opacity-100 bg-blue-500 w-48 h-16 rounded-lg text-lg focus:shadow-outline"


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
      priceMatter = 5000  
      verif = true 
     
   }
}

if (verif==true) {
   data.matiere.forEach(element => {
      price+=data.hour*priceMatter;
      
   });
   price = count*price
   
} else{
            
       for (const iterator of firstCycle) {
              
         if(iterator==data.class){
            priceMatter=1000
         }
         
       }
       for (const iterator of secondCycle) {

         if(iterator==data.class){
            priceMatter=1200
         }
         
       } for (const iterator of thirdCycle) {

         if(iterator==data.class){
            priceMatter=1500
         }
         
       }
       data.matiere.forEach(element => {
         price+=data.hour*priceMatter;
         
      });
      price = count*price
   
}
const tab =[priceMatter,price]
alert(price)
return tab
 } 

  const Mail = () => {

   let but = document.querySelector("#butRequest")
   let newBut = document.querySelector("#cont")
   let newMsg = document.createElement("p")
   newMsg.textContent="click on the button to finish your request "
   newBut.append(newMsg)
   but.removeAttribute("disable")
   newBut.className="text-green-600  capitalyse"
   
   but.className="bg-blue-500 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"

   // b.disabled=false;
   
   
   but.addEventListener("click",()=>{
     
       but.setAttribute("href"," http://127.0.0.1:8000/")
       console.log(but)
   })
  }

const [isLoading,setIsLoading] = useState(false)
const [isLoading2,setIsLoading2] = useState(false)
const onSubmit = (data) => {
  let vl = data
 const tab =  priceAll(data)

//   let but = document.querySelector("#butMail")
//   but.removeAttribute("disable");
//   // b.disabled=false;
  
//   but.className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
  

   console.log(data)

   
   setIsLoading(true)
   setIsLoading2(true)



setTimeout(()=>{

   axios ({
      method:'post',
      url:"http://127.0.0.1:8000/data/add/",
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
      //setIsLoading(false)
      alert(data.name)
      Mail()
      
   }).catch((res) =>{
      Mail()
      alert(res);
     
      setIsLoading2(false)
   })

},5000)
  

   
//data.email ="sandjonyves@gmail.com"
// console.log(data);
//    const template ="template_flpq63a"
//    const service = "service_9dc6y2a"
//    sendfeeback(service,template,{
//       name:data.name,
//          niveau:"sil",
//          classe:data.class,
//          matiere:data.matiere.join(";"),
//          numTel:data.number,
//           addEmail:data.email,
//           addresse:data.street
//       //reply_to : r.target.reset()
//    })
 
//  }
// const sendfeeback = (service,template,variable) => {
//    //alert("sucess");
//    var start = window.performance.now();
// emailjs

// .send((r) =>{
//    alert("sucess------------------------------");  
// },service,template,variable,"bCNRw6N4el2XeXAxp")

// .then((res) => {
//    //alert("sucess");
//    var end = window.performance.now();
//    var execute=end-start
//    alert(start+"   les temps   "+end+"temps d'execution :"+execute);
// })
// .catch((err) =>{
  
//    alert(JSON.stringify(err));
// })

// const config ={
//    Username :"sandjonyves@gmail.com",
//    password: "BB15C77A9CEEB25B9BF5A28B16BED6D5A060",
//    Host : "smtp.elasticemail.com",
//    Port : 2525,
//    To : "sandjonyves@gmail.com",
//    from:"sandjonyves@gmail.com",
//    Subject:"this is my conctact",
//    Body : "fdsfdsdffdsfdsfdsds"


// };
// if(window.Email){
//    window.Email.send(config).then(() => alert("bonjour"))
// }



}


let ButValid ="md:space-x-20 space-x-10   mt-10  text-center md:items-center justify-between "
let precButton = "bg-blue-500 hover:bg-blue-700 text-white font-bold md:ml-0 ml-[-30px] py-2 px-4 rounded focus:outline-none focus:shadow-outline"

let Style = "m-0 opacity-50   hover:bg-blue-200 focus:bg-red-400"
let Styles = "ml-5   text-lg  "
let but = "flex flex-col mt-5 space-y-5  h-auto  w-auto   ml-20 border-2 border-slate-300 mr-20  "
let buts = "flex flex-col mt-5 space-y-5  h-auto  w-auto   ml-10 border-2 border-slate-300 mr-10  "
let font = "w-screen h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center"
let font2 = "w-auto h-auto  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center"

let StylePev = " bg-blue-500 font-bold py-2 h-auto w-40 mb-5  px-4 rounded focus:outline-none text-white focus:shadow-outline hover:bg-blue-700"
let StyleTitle = "capitalize text-center text-xl bg-blue-500 text-white "

const  tabClass = ["class1","class2","class3","class4","class5","class6"];
const tabMatirePrimaire = ["mathematics","science ant technology" , "hist/geo/MEC","French","English","Human right","NLC(national language and culture)"];
const tabClassSecondaire = ["From1","From2","From3","From4","From5","lawer","upper"]
const firstCycle = ["From1","From2"]
const secondCycle =["From3","From4"]
const thirdCycle = ["From5","lawer","upper"]
const  tabMatiereSecondaireLiteraire = ["Mathematics","Additional math","Further maths","Physics","Chemistry","Biology","human Biology","Computer science","Philosophy" ,"French","English","LCN(national language and culture)","HistGeo/MEC", " Other Languages(Latin, Chinese, Spanish, German ...)","Cinematographic Arts"]
 
const tabVar= {font,font2,ButValid,precButton,StyleTitle,Styles,buts,StylePev}
const tabFunction = {radioValue,handleprev,handleNext,all2}
const tabFunction2 = {radioValue2,handleprev2,handleNext2,all21}

const registers= (data)=>{return {...register(data)}}


  return<><div id ="container"  className=" "  onSubmit={handleSubmit(onSubmit)}>

  
{/* formulaire des eleves de l'ecole primaire  */}
{


formNo2 === 1  && <div id="formctl" className="">
   <div className={font}>
   <div className="card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  rounded-md shadow-md bg-white   ">
   <h1 className={StyleTitle}>CHOICE OF LEVEL</h1>
      <div className={but}  >
        
        <button type="button" 
             onClick={all} 
             className={Style} 
             value="primaire"
              {...register("niveau")}>
               primary
              </button>
      </div>

      <div className={but} >
        
      <button type="button" 
             onClick={all1} 
             className={Style} 
             value="secondaire" 
             {...register("niveau")}>
               secondary
             </button>
 </div>
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
{/* <button onClick={handleNext}  class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
prev
</button> */}
       <Link to="/form"><button   
         className={StylePev}>
             <div className="">prev</div>
        </button> </Link>
       
</div>
</div>
</div>
 
</div>


}
{

formNo === 2 && <div>
<div className={font}>
<div className="card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  rounded-md shadow-md bg-white mt-48  ">
     
      <h1 className={StyleTitle}>
         choose of class
      </h1>
   
      <div >
         {tabClass.map((element) =>{
              return <ul><div className={buts}>
              <button 
             
                 value={element}
                
                 onClick={handleNext} 
                 className={Style}
                 {...register("class")}>
                  {element}
              </button>
           </div></ul>
         })}
     </div>
      <div class=" space-x-20 mt-10  text-center  
          items-center justify-between">
         <button onClick={all2}   
               class="butNexts" 
               id="butNext" 
               className={StylePev} >
               prev
         </button>
   </div> 
 </div>
</div>
<div className={font}></div>
</div>  

}


{formNo === 3&& <div ><Matter tabVars={tabVar} tabMatirePrimaire={tabMatirePrimaire} tabFunction = {tabFunction} registers={registers}/>
</div>


//    formNo === 3 && <div >

//   <div className={font}>
//    <form id = "form" className="w-screen h-screen  bg-gradient-to-r 
//    from-cyan-500 to-blue-500 flex  justify-center items-center p-5 max-[500px]:h-[1000px] 
//    flex 
//    justify-center items-center ">
//    <div className="card w-[500px]    h-auto rounded-md shadow-md bg-white p-5 my-10">
//       <h1 className={StyleTitle}> CHOIX DES MATIERES</h1>
    
   
//    <div>
//         {tabMatirePrimaire.map((element) => {
//              return  <div className={buts}>
//              <label htmlFor={element} className={Style}>
//                 {element}
//                 <input  type="checkbox"  id="checksM" class="checksMs" onClick={radioValue} {...register("matiere")} value={element} className={Styles}   /> 
//              </label>
       
//           </div>
//         })}
//    </div>

//    <div>
//       <div class=" space-x-20 mt-10  text-center   items-center justify-between">
//          <button  onClick={handleprev}  class=" bg-blue-500 hover:bg-blue-700 text-white
//           font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
//           type="button">
//            prec
//          </button>
//          <button disable id="butNext"   className=" bg-blue-500 hover:bg-blue-700 
//          text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-0
//           " >
//            suivant
//          </button>
         
//    </div>
//    </div>
// </div>
// </form>
// </div>
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
       className={StyleTitle}>

       How can we contact you </h1>
      </div>
      <label htmlFor="name " className="">Name</label>
      <input type="text" className="p-2 border boder-slate-400 mt-1 outline-0
      rounded-md" placeholder="enter your name"  {...register("name",{required:true,
      minLength:2}
      )} />
     {errors.name && <p className="text-red-300">empty field </p>}
   </div>
   
   <div className="flex flex-col mb-2 ">
      <label htmlFor="what is your number phone" className=""> Phone number</label>
      
     {/* prefice un champ */}
      <input type="text" placeholder="654340911"  className="p-2 border boder-slate-400 mt-1 outline-0
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
           <p className="text-red-300"> 

           the numbers must start with 6</p>)}
         {errors.number && errors.number.type ==="required" &&<p className="text-red-300"> empty field</p>}
   </div>
   <div className="flex flex-col mb-2 ">
   <h1 htmlFor="Où habite votre enfant " className=""> email addressl</h1>
      <input type="text" 
      className="p-2 border boder-slate-400 mt-1 outline-0
      rounded-md" placeholder="serad@gmail.com" 
      {...register("email",{
         required:true,
         pattern : /^([a-z]||[0-9])/
      })}
      />
       {errors.email && errors.email.type ==="pattern" &&(
            //  {veryf},
           <p className="text-red-300"> verify email address</p>)}
         {errors.email && errors.email.type ==="required" &&<p className="text-red-300">empty field</p>}
  
   </div>
   <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Town of residence" className="">Town of residence</h1>
         <input type="text" 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder=" yaounde " 
         {...register("ville",{
            required:true})}
         />
         {errors.street && <p className="text-red-300">empty field </p> }
      </div>

   <div className="flex flex-col mb-2 ">
   <h1 htmlFor="Where does your child live " className=""> Where does your child live </h1>
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
         <button onClick={handleprev} id = "prc" class={precButton} 
          type="button">
        prev
      </button>
      <button  class="butNexts" id="butNext"   className=" bg-blue-500 hover:bg-blue-700 
      text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
       " type = "submit"  >
        next
      </button>
</div>
<a disable id="butMail" onClick={Mail}  
       className=" bg-blue-500 hover:bg-blue-700 
         w-full text-white opacity-0 
          font-bold py-2 my-2 px-4
           rounded focus:outline-none 
           focus:shadow-outline 
          " >
           next</a>
         
         
</div>
{isLoading && 
   <Modal showModal={isLoading} setShowModal={setIsLoading} isLoading2={isLoading2} setIsLoading2={setIsLoading2}></Modal>

 }

</form>
</div>
</div>
}



{/* ////////////////formilaire du niveau secondaire/////// */}


{
formNo2 === 2 && <div>
   <div className={font}>
   <div className="card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  rounded-md shadow-md bg-white  mt-48">
        
         <h1 className={StyleTitle}>
         Choice of class
         </h1>
         
         <div >
             {tabClassSecondaire.map((element) =>{

               return <ul> <div className={buts}>
           
               <button id="one" 
                  value={element}
                  {...register("class")} 
                  onClick={handleNext2} 
                  className={Style} >
                     {element}
                  </button>
           
            </div></ul>
             })}
         </div>
    
         <div class=" space-x-20 mt-10  text-center  
             items-center justify-between">
            <button onClick={handleprev2}   
                  class="butNexts" 
                  id="butNext" 
                  className={StylePev} >
                 prev
            </button>
      </div> 
    </div>
   </div>
   <div className={font}></div>
</div>  


}


{/* {


   formNo2 === 3 && <div>

  
   <div className=" p-5 max-[500px]:h-[1000px] 
  w-screen h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center ">
   <div className="card w-[500px]    h-auto rounded-md shadow-md bg-white p-5 my-10">
      <h1 className={StyleTitle}> Choix des matieres</h1>
   <div className={buts}>
      <label htmlFor="Mathematique   " className="bg-blue-500 text-white">
      <h1 className="text-center text-xl "> matiere scientique </h1>  

      </label>
   </div>
 <div>
   {tabMatiereSecondaireScintifique.map((elmt)=>{
      return <div className={buts}>
      <label htmlFor="Mathematique   " className={Style}>
         {elmt}
         <input  type="checkbox" class="checksM" onClick={radioValue2} {...register("matiere")} value={elmt}  className={Styles}  /> 
      </label>
   </div>
   })}
 </div>
 <div className={buts}>
      <label htmlFor="Mathematique   " className="bg-blue-500 text-white">
      <h1 className="text-center text-xl "> matiere literaire </h1>  

      </label>
   </div>
 <div>

   {tabMatiereSecondaireLiteraire.map((elmt)=>{
      return <div className={buts}>
      <label htmlFor="Mathematique   " className={Style}>
         {elmt}
         <input  type="checkbox" class="checksM" onClick={radioValue2} {...register("matiere")} value={elmt}  className={Styles}  /> 
      </label>
   </div>
   })}
 </div>
   <div>
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
         <button onClick={handleprev2}  class=" bg-blue-500 hover:bg-blue-700 text-white
          font-bold py-2  px-4 rounded focus:outline-none focus:shadow-outline" 
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
</div>
</div>


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
       className={StyleTitle}>

       How can we contact you </h1>
      </div>
      <label htmlFor="name " className="">Name</label>
      <input type="text" className="p-2 border boder-slate-400 mt-1 outline-0
      rounded-md" placeholder="enter your name"  {...register("name",{required:true,
      minLength:2}
      )} />
     {errors.name && <p className="text-red-300">empty field </p>}
   </div>
   
   <div className="flex flex-col mb-2 ">
      <label htmlFor="what is your number phone" className=""> Phone number</label>
      
     {/* prefice un champ */}
      <input type="text" placeholder="654340911"  className="p-2 border boder-slate-400 mt-1 outline-0
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
           <p className="text-red-300"> 

           the numbers must start with 6</p>)}
         {errors.number && errors.number.type ==="required" &&<p className="text-red-300"> empty field</p>}
   </div>
   <div className="flex flex-col mb-2 ">
   <h1 htmlFor="Où habite votre enfant " className=""> email addressl</h1>
      <input type="text" 
      className="p-2 border boder-slate-400 mt-1 outline-0
      rounded-md" placeholder="serad@gmail.com" 
      {...register("email",{
         required:true,
         pattern : /^([a-z]||[0-9])/
      })}
      />
       {errors.email && errors.email.type ==="pattern" &&(
            //  {veryf},
           <p className="text-red-300"> verify email address</p>)}
         {errors.email && errors.email.type ==="required" &&<p className="text-red-300">empty field</p>}
  
   </div>
   <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Town of residence" className="">Town of residence</h1>
         <input type="text" 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder=" yaounde " 
         {...register("ville",{
            required:true})}
         />
         {errors.street && <p className="text-red-300">empty field </p> }
      </div>

   <div className="flex flex-col mb-2 ">
   <h1 htmlFor="Where does your child live " className=""> Where does your child live </h1>
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
         <button onClick={handleprev} id = "prc" class={precButton} 
          type="button">
        prev
      </button>
      <button  class="butNexts" id="butNext"   className=" bg-blue-500 hover:bg-blue-700 
      text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
       " type = "submit"  >
        next
      </button>
</div>
<a disable id="butMail" onClick={Mail}  
       className=" bg-blue-500 hover:bg-blue-700 
         w-full text-white opacity-0 
          font-bold py-2 my-2 px-4
           rounded focus:outline-none 
           focus:shadow-outline 
          " >
           next</a>
         
         
</div>
{isLoading && 
   <Modal showModal={isLoading} setShowModal={setIsLoading} isLoading2={isLoading2} setIsLoading2={setIsLoading2}></Modal>

 }

</form>
</div>
</div>
}
   </div></> 
}


export  default ChooseStandard