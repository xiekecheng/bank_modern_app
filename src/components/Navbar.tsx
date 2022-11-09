import React, {useState} from 'react';
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`flex justify-between items-center navbar py-6 w-full`}>
      <div>
        <img src={logo} alt="" className={`w-[124px] h-[32px]`}/>
      </div>
      <ul className={`gap-4 text-white hidden sm:flex`}>
        {
          navLinks.map(item => (
            <li key={item.id}>
              <a href={`${item.id}`}>{item.title}</a>
            </li>
          ))
        }
      </ul>
      <div className="sm:hidden flex">
        <img src={toggle ? close : menu} alt="menu" onClick={() => setToggle(!toggle)}
             className={`object-contain w-[28px] h-[28px] cursor-pointer `}/>
        <div className={`${toggle ? `flex` : `hidden`} absolute top-20 right-0`}>
          <ul className={`gap-4 flex flex-col`}>
            {
              navLinks.map(item => (
                <li key={item.id} className={`font-medium font-poppins`}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;