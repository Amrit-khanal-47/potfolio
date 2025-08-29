import sidebarimage from '../Assets/sidebar.jpg'
import { IoHome } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa6";
import { FaRectangleList } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GiDiscGolfBag } from "react-icons/gi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
function Sidebar() {

  const MenuArrey=[
    {
      icon:<IoHome/>,
      name:"Home",
    },
     {
      icon: <FaAddressCard/>,
      name:"About",
    },
     {
      icon:  <FaRectangleList/>,
      name:"Services",
    },
     {
      icon:<GiDiscGolfBag/>,
      name:"Potfolio",
    },
     {
      icon:  <RiDoubleQuotesL/>,
      name:"Testimonial",
    },
     {
      icon:<BiSolidMessageSquareDetail/>,
      name:"Blog",
    },
     {
      icon:<MdEmail/>,
      name:"Contact",
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
   
   <li key={index}>
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
