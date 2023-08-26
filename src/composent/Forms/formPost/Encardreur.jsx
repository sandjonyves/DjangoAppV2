import { useState } from "react";

import {useForm} from "react-hook-form"
import axios from "axios";
import Modal2 from "./Modal2";
function Encardreur(params) {
    const {handleSubmit,register,formState: {errors}} = useForm()
   
    const [isLoading2,setIsLoading2] = useState(false)
    const [openModal, setOpenModal] = useState('')
    const props = { openModal, setOpenModal };
    const [verify, setVerify] = useState(2)
    
    
    const  onSubmit = (data) => {
        


        props.setOpenModal('dismissible') 
        
        setIsLoading2(true)
        axios ({
         method : "post",
         url :"http://127.0.0.1:8000/data/add2/",
         data : {
            'name':data.name,
            'prenom' : data.Prenom,
            'numTel' : data.number,
            'addEmail' : data.email,
           'untEnseignaement' : data.matiere
            
         }
        }).then((res) =>{
     
         setVerify(1)
     
         setIsLoading2(false)
         
      }).catch((res) =>{
         
         setVerify(0)
         setIsLoading2(false)
        
      })
   
      }


     let font = "w-screen h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center"
let StyleTitle = "capitalize text-center text-xl bg-blue-500 text-white "
const tabVar= {font,verify}

  
    return <>
    
   <div   onSubmit={handleSubmit(onSubmit)}>

   <div className={font}> 

    
<form className="card w-[385px] rounded-md shadow-md bg-white p-5 max-[720px]:m-15">
     
         <div className="text-center"> <h1 htmlFor="how can we joint you text-center"
          className={StyleTitle}>ramplire le formulaire  </h1>
         </div>
         <div className="flex flex-col my-5 mb-2 ">
         <label htmlFor="name " className="">Nom</label>
         <input type="text" className="p-2 border boder-blue-400 mt-1 outline-0
         rounded-md" placeholder="entrer votre nom"  {...register("name",{required:true,
         minLength:2}
         )} />
        {errors.name && <p className="text-red-300">Champ vide </p>}
      </div>
      <div className="flex flex-col mb-2 ">
         <label htmlFor="name " className="">Prenom</label>
         <input type="text" className="p-2 border boder-blue-400 mt-1 outline-0
         rounded-md" placeholder="entrer votre prenom"  {...register("Prenom",{required:true,
         minLength:2}
         )} />
        {errors.name && <p className="text-red-300">Champ vide </p>}
      </div>
      
      <div className="flex flex-col mb-2 ">
         <label htmlFor="what is your number phone" className=""> Numero de telephone</label>
         
        {/* prefice un champ */}
         <input type="text" placeholder="693639864"  className="p-2 border boder-slate-400 mt-1 outline-0
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
              <p className="text-red-300"> Verifier le numero</p>):
              errors.number && errors.number.type ==="minLength" ?(
               //  {veryf},
              <p className="text-red-300"> Numeros incomplet </p>):
              true
              }
              {errors.number && errors.number.type ==="pattern" &&(
               //  {veryf},
              <p className="text-red-300"> Le numeros doit commencer par 6</p>)}
            {errors.number && errors.number.type ==="required" &&<p className="text-red-300"> champ vide</p>}
      </div>
      <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Où habite votre enfant " className=""> Adresse email</h1>
         <input type="text" 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="serad@gmail.com" 
         {...register("email",{
            required:true,
            pattern : /^[a-zA-Z0-9._%+-]+@+[a-zA-Z0-9]+.+[A-z]/
         })}
         />
          {errors.email && errors.email.type ==="pattern" &&(
               //  {veryf},
              <p className="text-red-300"> verifier l'adresse email</p>)}
            {errors.email && errors.email.type ==="required" &&<p className="text-red-300"> champ vide</p>}
     
      </div>

      <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Où habite votre enfant " className=""> Unité d'enseignement </h1>
         <input type="text" 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="exp:mathematique " 
         {...register("matiere",{
            required:true})}
         />
         {errors.street && <p className="text-red-300">champ vide </p> }
      </div>
      <div>
         
         <button  class="butNexts" id="butNext"  className=" bg-blue-500 hover:bg-blue-700 
         text-white  font-bold py-2 px-4 mx-[110px] rounded focus:outline-none focus:shadow-outline
          " type = "submit"  >
           Envoyer
         </button>
   
   </div>
   {props.openModal === 'dismissible' && 
   <Modal2 tabVars={tabVar} openModal={openModal} setOpenModal={setOpenModal} isLoading2={isLoading2} setIsLoading2={setIsLoading2}/>

 }
</form>
</div>
   </div>

    </>
    
}

export default Encardreur