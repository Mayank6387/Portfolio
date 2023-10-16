import React, { useState } from 'react'
import './nav.css'
import {AiOutlineBook,AiOutlineHome,AiOutlineContacts,AiOutlineUser} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri'



function Nav() {
  const [activenav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" className={(activenav==='#')?'active':''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=>setActiveNav('#about')} className={(activenav==='#about')?'active':''}><AiOutlineUser/></a>
        <a href="#contact" onClick={()=>setActiveNav('#contact')} className={(activenav==='#contact')?'active':''}><AiOutlineContacts/></a>
        <a href="#experience" onClick={()=>setActiveNav('#experience')} className={(activenav==='#experience')?'active':''}><AiOutlineBook/></a>
    </nav>
  )
}

export default Nav