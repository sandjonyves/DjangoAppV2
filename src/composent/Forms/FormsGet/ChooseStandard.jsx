import { useState } from "react";
import { Link } from "react-router-dom"
import {useForm} from "react-hook-form"
import axios from 'axios'
// import emailjs from "@emailjs/browser"

function ChooseStandard(){

  //initiallisation des outils de gestion des formilaires de react js
   const {handleSubmit,register,formState: {errors}} = useForm()
  

//empoyement the child components

   //  
   const pattern = /^6[0-9]{8}$/

   const veryf = () => {
      var a = document.getElementById('butNext');
      a.addEventListener("click",{handleNext});
   }

   //declaration of constate who will be use to change form

   const [count,setcount] = useState(0);
  
  
   const radioValue = () => {
       

      var checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
      var b =document.querySelector("#butNext");
      let verif=false;
      let index = 0
      while( index < checkboxes2.length) {
       
         
         const element = checkboxes2[index].checked;
         console.log(element);
         console.log(verif);
         index++;
         if (element) {
            verif=true;
         }
      }
    
    
      if (verif) {
         console.log(checkboxes2.length);
        
        b.removeAttribute("disable");
        // b.disabled=false;
     
        b.className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
         b.addEventListener('click', (event) => {
            let i = 0;
            // while( i < checkboxes2.length) {
                      
            //  let elemen= checkboxes2[0];
            
            //      elemen.checked=true;
                 
            //      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
            //              console.log(elemen);
            //              i++;
                         
                      
                      
                   //}
    
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
             
            
            b.className="bg-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
   
   
           });
      }
     
    }
    
    function all2() {
      handlePrev()
      ctl2()
      radioValue()
   }
   
   
   
   const formArray  =[1,2,3,4,5];
   const [formNo,setFormNo] = useState(formArray[0]);

   const formArray2  =[1,2,3,4,5];
   const [formNo2,setFormNo2] = useState(formArray2[0])

 //incrrmentation ou decrementation de fomno pour afficher chaque forùulaire
   const handleNext = () =>{
       
       setFormNo(formNo + 1)
   }
   const handlePrev = () =>{

       setFormNo(formNo -1 )
   }
   const handleNext2 = () =>{
       setFormNo2(formNo2 + 1)
   }
  
   const handlePrev2 = () =>{
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
  
     const change = () =>{

      var checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
         var b =document.querySelector("#butNext");
       
         console.log(b);
      
         console.log("fdsfffffffffffffffffffffff");
         
         //   b.removeAttribute("disable");
           // b.disabled=false;
         //  b.className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
         //b.attributes='disable';
         b.addEventListener('click', (event) => {
            console.log(event);
         
         handleNext()
        });
       
   
        handlePrev();
        // console.log(f);
       
      // f.reset();
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
   function all2() {
      handlePrev()
      ctl2()
   }
   function all21() {
      handlePrev2()
      ctl2()
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
            alert("bonjour")
         }
      }
      alert(verif)
      if (verif==true) {
         data.matiere.forEach(element => {
            price+=data.hour*priceMatter;
            
         });
         price = count*price
         alert("1")
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
             data.matiere.forEach(element => {
               price+=data.hour*priceMatter;
               
            });
            price = count*price
         
      }
      alert(price)
      return price
       } 
      
        const Mail = () => {
      
         let but = document.querySelector("#butMail")
         
         // b.disabled=false;
         
         
         but.addEventListener("click",()=>{
           
             but.setAttribute("href"," http://127.0.0.1:8000/")
             console.log(but)
         })
        }
      
   const onSubmit = (data) => {
      let vl = data
     const price =  priceAll(data)
    
      let but = document.querySelector("#butMail")
      but.removeAttribute("disable");
      // b.disabled=false;
      
      but.className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      
    
       console.log(data)
    
       axios ({
          method:'post',
          url:"http://127.0.0.1:8000/data/add/",
          data:{
             'name':data.name,
             'niveau':data.niveau,
             'classe':data.class,
             'matiere':data.matiere.join(";"),
             'jours':data.day.join(";"),
             'heure':data.hour,
             'numTel':data.number,
              'addEmail':data.email,
              'addresse':data.street,
              'Price':price
          }
       }).then((res) =>{
          alert(data.name)
          
       }).catch((res) =>{
          alert(res);
         
       })
    
       
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
    let chekbox ="w-6 space-x-5  hover:bg-red-400"
    let Style = "m-0 opacity-50  text-lg  hover:bg-blue-200 focus:bg-red-400"
 let Styles = "ml-5   text-lg "
 let but = "flex flex-col mt-5 space-y-5  h-auto  w-auto   ml-20 border-2 border-slate-300 mr-20  "
 let buts = "flex flex-col mt-5 space-y-5  h-auto  w-auto   ml-10 border-2 border-slate-300 mr-10  "
 let font = "w-screen h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center"
 let StylePev = " bg-blue-500 font-bold py-2 h-auto w-40 mb-5  px-4 rounded focus:outline-none text-white focus:shadow-outline hover:bg-blue-700"
 let StyleTitle = "capitalize text-center text-xl bg-blue-500 text-white "
   
   
   const  tabClass = ["SIL" ,"CP" , "CE1", "CE2", "CM1", "CM2"];
   const tabClassSecondaire = ["6eme","5eme","4eme","3eme","2nd","1ere","Tel"];
   const firstCycle = ["6eme","5eme"]
   const secondCycle =["4eme","3eme"]
   const thirdCycle = ["2nd","1ere","Tel"]
   const tabMatiereSecondaireScintifique = ["Mathematique","Physique","Chimie","Svt","Informatique"];
   const  tabMatiereSecondaireLiteraire = ["Mathematique","Physique","Chimie","Svt","Informatique","Philosophie" ,"Français","Aglais","LCN(langue et culture nationnal)","HistGeo/Ecm", "Autres Langues(Latin,Chinoir,Espagniol,Allemang ...)","Arts Cinematographiques"]
   const tabNiveau = ["primaire","secondaire"]

 const tabClas = ["class1","class2","class3","class4","class5","class6"]
 const tabClas2 = ["From1","From2","From3","From4","From5","lawer","upper"]
 const tabMatirePrimaire = ["matamatic","science","hist/geo/ecm","anglais"]


  return <div onSubmit={handleSubmit(onSubmit)}>

<div className="h-20"><h1 className="py-5 text-center text-w-[300px] ">SERAD LA SAOLUTION POUR VOS ENFANTS</h1> </div>

{
formNo === 2 && <div>
<div className={font}>
<div className="card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  rounded-md shadow-md bg-white  my-20">
     
      <h1 className={StyleTitle}>
         Choose class
      </h1>
       
       <div className={buts}>
      
         {tabClas.map((element) => {
            console.log(element)
            return <ul><div className={buts}><button value={element} className={Style} onClick={handleNext} {...register("class")}>{element}</button>
             </div></ul>
         })}
       
       </div>
  
    
      <div class=" space-x-20 mt-10  text-center  
          items-center justify-between">
         <button onClick={all2}   
               class="butNexts" 
               id="butNext" 
               className={StylePev} href="#">
               prev
         </button>
   </div> 
 </div>
</div>
</div>  

}


{


   formNo === 3 && <div>

  
   <form  className=" p-5 max-[500px]:h-[1000px] h-screen bg-slate-300 w-screen h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center">
   <div className="card w-[500px]    h-auto rounded-md shadow-md bg-white p-5 my-10">
      <h1 className={StyleTitle}> Choose Matter</h1>
   <div className={buts}>
      <label htmlFor="Mathematics   " className={Style}>
         Mathematics
         <input  type="checkbox" class="checksM" onClick={radioValue} {...register("matiere")} value="mathematics"  className={Styles}   /> 
      </label>
   </div>
   <div className={buts}>
      <label htmlFor="ICT" className={Style}>ICT
            <input type="checkbox" class="checksM" onClick={radioValue} {...register("matiere")} value="ICT" className={Styles}/>
      </label>
   </div>
   <div className={buts}>
         <label htmlFor=" Science and Tecnology" className={Style}> 
         Science and Tecnology
            <input type="checkbox" class="checksM" onClick={radioValue} {...register("matiere")} value="Science and Tecnology" className={Styles} />
         </label>
   </div>
   
   <div className={but}>
      
      {tabMatirePrimaire.map((element) => {
         console.log(element)
         return  <div className={but}> <ul>   <li> {element}<input type="checkbox" class="checksM" onClick={radioValue} {...register("matiere")} value={element}  className={Styles}/>
         </li> </ul></div>
      })}
    
    </div>
  
   <div>
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
         <button  onClick={handlePrev}  class=" bg-blue-500 hover:bg-blue-700 text-white
          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button">
            prev
         </button>
         <button disable id="butNext"   className=" bg-blue-500 hover:bg-blue-700 
         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-0
          " >
            next
         </button>
   </div>
   </div>
</div>
</form>
</div>


}
{
   formNo === 4 && <div>
      <div className={font}> 

    
<form className="card w-[375px] rounded-md shadow-md bg-white p-5 ">
      <div className="flex flex-col mb-2 ">
         <div className="text-center"> <h1 htmlFor="how can we joint you text-center"
           className={StyleTitle}>Comment pouvons nous vous contacté </h1>
         </div>
         <label htmlFor="name " className="">nom</label>
         <input type="text" className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="enter your name"  {...register("name",{required:true,
         minLength:2}
         )} />
        {errors.name && <p className="text-red-300">champ vide </p>}
      </div>
      
      <div className="flex flex-col mb-2 ">
         <label htmlFor="what is your number phone" className=""> numero de telephone</label>
         
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
              <p className="text-red-300"> le numeros doit commencer par 6</p>)}
            {errors.number && errors.number.type ==="required" &&<p className="text-red-300"> champ vide</p>}
      </div>
      <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Où habite votre enfant " className=""> adresse email</h1>
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
              <p className="text-red-300"> verifier l'adresse email</p>)}
            {errors.email && errors.email.type ==="required" &&<p className="text-red-300"> champ vide</p>}
     
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
         
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
         <button onClick={handlePrev} id = "prc" class=" bg-blue-500 hover:bg-blue-700 text-white
          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button">
           prec
         </button>
         <button  class="butNexts" id="butNext"  className=" bg-blue-500 hover:bg-blue-700 
         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
          " type = "submit"  >
           suivant
         </button>
   </div>
   </div>

</form>
</div>
</div>
}



{/* ////////////////formilaire du niveau secondaire/////// */}

{


formNo2 === 1  && <div id="formctl" className="">
   <div className={font}>
  <div className="card w-[400px] h-auto md:mx-20 mx-60  rounded-md shadow-md bg-white p0 my-20 ">
   <h1 className={StyleTitle}>choose the academic level </h1>
      <div className={but} onClick={all} >
         <button className={Style}  >primaire</button>
      </div>

      <div className={but}>
         <button onClick={handleNext2}  className={Style}>secondaire</button>
      </div>
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
{/* <button onClick={handleNext}  class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
prev
</button> */}
       <Link to="/form"><button   id="butNext" 
         className={StylePev}>
             <div className="">prev</div>
        </button> </Link>
</div>
</div>
</div>
 
</div>


}



{
formNo2 === 2 && <div>
   <div className={font}>
   <div className="card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  rounded-md shadow-md bg-white  my-20">
        
         <h1 className={StyleTitle}>
            Choose class
         </h1>
         <div className={buts}>
      
         {tabClas2.map((element) => {
            console.log(element)
            return <ul><div className={buts}><button value={element} className={Style} onClick={handleNext} {...register("class")}>{element}</button>
            </div></ul>
         })}
       
       </div>
  

       
         <div class=" space-x-20 mt-10  text-center  
             items-center justify-between">
            <button onClick={all21}   
                  class="butNexts" 
                  id="butNext" 
                  className={StylePev}>
                  prev
            </button>
      </div> 
    </div>
   </div>
</div>  


}


{


   formNo2 === 3 && <div>

  
   <div className=" p-5 max-[500px]:h-[1000px] h-screen bg-slate-300 w-screen h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center ">
   <div className="card w-[500px]    h-auto rounded-md shadow-md bg-white p-5 my-10">
      <h1 className={StyleTitle}> choose matter</h1>

      <div className={but}>
      
      {tabMatirePrimaire.map((element) => {
         console.log(element)
         return  <div className={but}> <ul>   <li> {element}<input type="checkbox" class="checksM" onClick={radioValue} {...register("matiere")} value={element}  className={Styles}/>
         </li> </ul></div>
      })}
    
    </div>
  
  
</div>
</div>
</div>


}
{
   formNo2 === 4 && <div>
      <div className={font}> 

    
<form className="card w-[375px] rounded-md shadow-md bg-white p-5 ">
      <div className="flex flex-col mb-2 ">
         <div className="text-center"> <h1 htmlFor="how can we joint you text-center"
          className={StyleTitle}>Comment pouvons nous vous contacté </h1>
         </div>
         <label htmlFor="name " className="">nom</label>
         <input type="text" className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="enter your name"  {...register("name",{required:true,
         minLength:2}
         )} />
        {errors.name && <p className="text-red-300">champ vide </p>}
      </div>
      
      <div className="flex flex-col mb-2 ">
         <label htmlFor="what is your number phone" className=""> numero de telephone</label>
         
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
              <p className="text-red-300"> le numeros doit commencer par 6</p>)}
            {errors.number && errors.number.type ==="required" &&<p className="text-red-300"> champ vide</p>}
      </div>
      <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Où habite votre enfant " className=""> adresse email</h1>
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
              <p className="text-red-300"> verifier l'adresse email</p>)}
            {errors.email && errors.email.type ==="required" &&<p className="text-red-300"> champ vide</p>}
     
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
         
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
         <button onClick={change} id = "prc" className=" bg-blue-500 hover:bg-blue-700 text-white
          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button">
           prec
         </button>
         <button  class="butNexts" id="butNext"  className=" bg-blue-500 hover:bg-blue-700 
         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
          " type = "submit"  >
           suivant
         </button>
   </div>
   </div>

</form>
</div>
</div>
}

   </div>
}


export  default ChooseStandard