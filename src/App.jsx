import { useState } from 'react'
import Sidebar from './Components/sidebar'
import HeroSection from './Components/HeroSection'
import Experience from './Components/Experience'
import About from './Components/About'
import Sercices from './Components/Services'
import Hire from './Components/hire'
import Slide from './Components/Slide'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='maincontainer'>
      <div className='maincontainer-sidebar'>
     <Sidebar />
     </div>
     <main className='maincontainer-content'>
      

          <HeroSection />
          {/* <Experience /> */}
         <About heading="About Me" />
           <Sercices />
          <Hire/>
          <Slide/>
         
     </main>
     </div>
    </>
  )
}

export default App
