import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa';
import { PiFilesBold } from 'react-icons/pi';
import ME from '../../assets/me.png'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-Image"> <img src={ME} alt="About Image" srcSet="" />
          </div>
           </div>

          <div className="about__contact">
            <div className="about__cards">
              <article className="about__card">
              <FaAward className='about_icon'/><h5>Experience</h5>
              <small>3+ Years Working</small>
              </article>
              <article className="about__card">
              <PiFilesBold className='about_icon'/><h5>Projects</h5>
              <small>8+ Completed</small>
              </article>
            </div>
            <p>💻 Front-End Web Developer | Crafting Cutting-Edge Web Applications with JavaScript, Python, and Tailwind CSS,HTML & CSS | Kanpur Institute of Technology '25 🎓</p>
            <a href="" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    
    </section>
  )
}
