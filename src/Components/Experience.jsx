import React from 'react'

import { GiCartwheel } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";
function Experience() {
  return (
 <>
 <section role="individual-component" className="experienceWrapper">
   <div className="experienceWrapper-header">
      <h2>My Resume</h2>
      <h3>Education & Experiance</h3>
   </div>


   <div  className="experienceWrapper-experience">
    
    <div className="experienceWrapper-experience-individual">
 <div className='bordersection'>  
        <div className="bordersection-skill">
    
            <div className="bordersection-skill-ui">
                <GiCartwheel/>

                <div className="bordersection-skill-ui-info">
                    <h5>UX / UI Designer</h5>
                    <p>Apple Inc (2017 - 2020)</p>
                    < p role="small">Contrary the on way yollis pellentesque pellentesque feugiat risus met.</p>
                    </div>
            </div>
            <div className="bordersection-skill-ui">
                <GiCartwheel/>

                <div className="bordersection-skill-ui-info">
                    <h5>UX / UI Designer</h5>
                    <p>Apple Inc (2017 - 2020)</p>
                    < p role="small">Contrary the on way yollis pellentesque pellentesque feugiat risus met.</p>
                    </div>
            </div>
             <div className="bordersection-skill-ui">
                <GiCartwheel/>

                <div className="bordersection-skill-ui-info">
                    <h5>UX / UI Designer</h5>
                    <p>Apple Inc (2017 - 2020)</p>
                    < p role="small">Contrary the on way yollis pellentesque pellentesque feugiat risus met.</p>
                    </div>
            </div>

        </div>   
        
         </div>
         
         <div className='circle'>
            <span><FaCircle/></span>
            <span><FaCircle/></span>
            <span><FaCircle/></span>        
         </div>
         </div>   
   </div>




   
   
    </section>
   
    
 </>
  )
}

export default Experience
