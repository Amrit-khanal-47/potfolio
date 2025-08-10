import sidebarimage from '../Assets/sidebar.jpg'
import { IoHome } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa6";
import { FaRectangleList } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GiDiscGolfBag } from "react-icons/gi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
function Sidebar() {
  return (
<>
<div className='sidebarwrapper'>
<div className='sidebarwrapper-logo'>
  <img src={sidebarimage}/>
</div>
<button className='sidebarwrapper-button'>AMRIT</button>

<div className='sidebarwrapper-content'>
  <ul className='sidebarwrapper-content-menu '>
<li>
  <IoHome/><span>Home</span>
</li>
<li>
  <FaAddressCard/><span>About</span>
</li>
<li>
  <FaRectangleList/><span>Service</span>
</li>
<li>
  <GiDiscGolfBag/><span>Potfolio</span>
</li>
<li>
  <RiDoubleQuotesL/><span>Testimonial</span>
</li>
<li>
  <BiSolidMessageSquareDetail/><span>Blog</span>
</li>
<li>
  <MdEmail/><span>Contact</span>
</li>
</ul>
<p>Copyright @ AMRIT</p>
</div></div>

</>
  )
}

export default Sidebar
