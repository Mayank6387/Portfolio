import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">Mayank Gupta</a>
      <ul className="permalinks">
        <li>
          <a href="#">Home
          </a>
        </li>

        <li>
          <a href="#about">About
          </a>
        </li>
        <li>
          <a href="#experience">Experience
          </a>
        </li>
        <li>
          <a href="#contact">Contact
          </a>
        </li>
      </ul>
      {/* <div className="footer__socials">
      <a href="https://github.com/Mayank6387" target='_blank'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/mayank-gupta-7570a4249/" target='_blank'><BsLinkedin/></a>
      </div> */}
      <div className="footer__copyright">
        <small>&copy;MayankGupta.ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  )
}

export default Footer