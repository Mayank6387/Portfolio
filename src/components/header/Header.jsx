import React from 'react'
import './header.css'
import HD from './HD'
import ME from '../../assets/me.png'
import Headersocials from './Headersocials'


function Header() {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Mayank Gupta</h1>
            <h5 className="text-light">Frontend Web Developer</h5>
            <HD/>
            <Headersocials/>
            <div className="me">
            <img src={ME} alt="me" srcset="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header