import { useState } from 'react'
import Sidebar from './Components/sidebar'
import HeroSection from './Components/HeroSection'
import Experience from './Components/Experience'
import About from './Components/About'
import Sercices from './Components/Services'

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
          <Experience />
         {/* <About />
         <Sercices /> */}


     </main>
     </div>
    </>
  )
}

export default App
