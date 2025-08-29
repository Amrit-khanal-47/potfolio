import React, { useState, useEffect } from 'react'

function Slide() {
const[currentIndex,setCurrentIndex]=useState(0);
const[location, setlocation]=useState(true)

useEffect(()=>{
  
    window.scrollTo(0,0);
    setlocation(false)
})


 const slider =[
    {
        name:"amrit",
        age:22
    },
    {
        name:"ashok",
        age:20
    },
    {
        name:"utsav",
        age:23
    },
    {
        name:"sandip",
        age:21
    }
]
    

 const nextslide=() =>{
    setCurrentIndex((prev) => prev ===slider.length-1? 0:prev+1)
 }

  const prev=() =>{
    setCurrentIndex((prev) => prev ===0?slider.length-1:prev-1 )
 }





  return (
   <>
   
<div>
   
        <>
        <div >{slider[currentIndex].name},{slider[currentIndex].age}</div>
        </>
  
  </div>


  <div>
    <button onClick={prev}>Previous</button>
    <button onClick={nextslide}>Next</button>
  </div>

  <button onClick={()=>setlocation(true)}>top</button>
   </>
  )
}

export default Slide




