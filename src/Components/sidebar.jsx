import sidebarimage from '../Assets/sidebar.jpg'
import { IoHome } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa6";
import { FaRectangleList } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GiDiscGolfBag } from "react-icons/gi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
function Sidebar(activecomponent,scrollToComponent) {

  const MenuArrey=[
    {
      icon:<IoHome/>,
      name:"hero",
    },
     {
      icon: <FaAddressCard/>,
      name:"about",
    },
     {
      icon:  <FaRectangleList/>,
      name:"services",
    },
     {
      icon:<GiDiscGolfBag/>,
      name:"potfolio",
    },
     {
      icon:  <RiDoubleQuotesL/>,
      name:"testimonial",
    },
     {
      icon:<BiSolidMessageSquareDetail/>,
      name:"blog",
    },
     {
      icon:<MdEmail/>,
      name:"contact",
    },

  ];

  return (
<>
<div className='sidebarwrapper'>
<div className='sidebarwrapper-logo'>
  <img src={sidebarimage}/>
</div>
<button className='sidebarwrapper-button'>AMRIT</button>

<div className='sidebarwrapper-content'>
  <ul className='sidebarwrapper-content-menu '>

    {MenuArrey.map((item, index)=>
   
   <li key={index} onClick={()=>{scrollToComponent(item.name);}} className={`sidebarwrapper-content-menu-item ${activecomponent===item.id ? "active" :""}`}>
  {item.icon}<span>{item.name}</span>
</li>   
   )}
</ul>
<p>Copyright @ AMRIT</p>
</div></div>

</>
  )
}

export default Sidebar
