import React from 'react'
import CV from '../../assets/cv.pdf'

function HD() {
  return (
    <>
    <div className="CTA">
    <a href="#contact" className='btn'>Let's Talk</a>
    <a href={CV} download className='btn btn-primary'>Download CV</a>
    </div>
    </>
  )
}

export default HD