import { useState } from 'react'
import Sidebar from './Components/sidebar'
import HeroSection from './Components/HeroSection'
import Experience from './Components/Experience'
import About from './Components/About'
import Sercices from './Components/Services'
import Hire from './Components/hire'
import Slide from './Components/Slide'
import Form from './Components/Form'  
import Footer from './Components/Footer'
import { useEffect } from 'react'



function App() {
  const [activecomponent ,setactivecomponent]=useState("");

  useEffect(()=>{
    const handlescroll=()=>{
      const section=["hero","about","services"];
      let currentSection="";

      section.forEach((section)=>{
        const sectionTop=section.offsetTop;
        const sectionheight=section.clientHeight;

        if(window.screenY>= sectionTop && window.scrollY<sectionTop+sectionheight){
          currentSection=section.getElementById("id");
        }
      });
      setactivecomponent(currentSection);
    };
    window.addEventListener("scroll",handlescroll);
    return()=>{
      window.removeEventListener("scroll",handlescroll);
    };
  },[]);

const scrollToComponent =(id)=>{
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
  return (
    <>
    <div className='maincontainer'>
      <div className='maincontainer-sidebar'>
     <Sidebar activecomponent={activecomponent} scrollToComponent={scrollToComponent} />
     </div>
     <main className='maincontainer-content'>
      
<section id="hero"><HeroSection /></section>
          
          {/* <Experience /> */}
          <section id="about"><About heading="About Me" /></section>
         
        <section id="services"><Sercices /></section>   
          <Hire/>
       <Footer/>
     </main>
     </div>
    </>
  )
}

export default App
