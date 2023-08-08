import Navbars from '../Navbar'
import React from 'react'

export default function APropos() {


    let  DivStyle = "block mt-5 mr-20 md:ml-48 h-auto ml-20"
    let FIgStyle = "md:flex  rounded-xl p-8 md:p-0 mx-20 my-5 md:mx-48  "    
  return (
    <div><div>
    <Navbars/>
</div>
<div class=" text-center text-2xl  text-red-500 ">
<h2 className="uppercase">A propos de Nous </h2>
<h3 class="pt-12 text-red-400 ">Notre Petite Histoire </h3></div>
<div class={DivStyle}>
    {/* <h3 class="">Comment vérifiez-vous vos tuteurs?</h3> */}
    <p class=" text-left mt-8 font-display">
        
        
        
        
        SERAD-EDUCATION a été créée en 2021  , L'entreprise s'est spécialisée dans le suivi scolaire à domicile pour offrir un accompagnement personnalisé aux élèves du primaire jusqu'à secondaire dans les deux sous-systemes (Francophone et Anglophone).

Au départ, SERAD-EDUCATION proposait des cours particuliers dans les matières clés telles que les mathématiques, les sciences et les langues. Grâce à une équipe d'enseignants qualifiés et expérimentés, l'entreprise s'est rapidement fait connaître pour la qualité de son enseignement et son approche individualisée.

Au fil des années, SERAD-EDUCATION a élargi ses services pour répondre aux besoins spécifiques des élèves. L'entreprise a développé des programmes de soutien scolaire adaptés à chaque élève, en prenant en compte leurs difficultés et leurs objectifs académiques.

le  SERAD-EDUCATION donnent la possibilité aux  élèves de  bénéficier d'un accompagnement régulier et personnalisé dans le confort de leur propre domicile. Les enseignants (encadreurs) se déplacent chez les élèves pour dispenser leurs cours et assurer un suivi continu.

L'entreprise a également noué des partenariats avec des établissements scolaires locaux, les parents d'élèves et les organismes éducatifs afin de renforcer son réseau et d'offrir des services complémentaires. Ces collaborations ont permis à SERAD-EDUCATION de se positionner comme un acteur majeur dans le domaine du suivi scolaire à domicile.

Aujourd'hui, SERAD-EDUCATION continue d'évoluer et innover pour répondre aux besoins changeants des élèves. L'entreprise propose un large éventail de services, allant du soutien scolaire individuel aux cours en ligne, en passant par des stages de révisions pendant les vacances. Son objectif reste le même : accompagner les élèves dans leur réussite scolaire et les aider à développer leur plein potentiel.


SERAD-EDUCATION : promouvoir la connaissance, la réussite et la compétence.
        
        
        </p></div>
</div>
  )
}
