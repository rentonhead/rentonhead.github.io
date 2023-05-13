import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

import { Link} from "react-scroll";
const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 " >
      <div className="container mx-auto">
        {/* fixed left-0 top-1/4 z-50 px-5 py-3 bg-transparent flex flex-col space-y-3 */}
        <div className="invisible md:visible bg-greenlight/40 backdrop-blur-2xl w-12 rounded-full fixed right-4 top-1/3 z-50 px-5 py-3 flex flex-col space-y-3 justify-between items-center text-2xl text-white/50">
          <Link to='home' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}>
            <BiHomeAlt />
          </Link>
          <Link to='about' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          activeClass="active"
          smooth={true}
          spy={true}
          >
            <BiUser />
          </Link>
          <Link to='services' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          activeClass="active"
          smooth={true}
          spy={true}
          >
            <BsClipboardData />
          </Link>
          <Link to='contact' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          activeClass="active"
          smooth={true}
          spy={true}
          >
            <BsChatSquare />
          </Link>
        </div>
        <div className='relative'>
   <div className='fixed bottom-1 left-10 rounded-t-3xl  w-10 h-10 grid content-center justify-center text-black font-secondary font-semibold'>
      2023
   </div>
</div>
      </div>
    </nav>
  );
};

export default Nav;
