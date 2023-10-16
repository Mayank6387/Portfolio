import React from "react";
import { MdEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sx570sb', 'template_1p0eiqo', form.current, 'zaZvczCWWgjYPtuaz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-Icon'/>
            <h4>Email</h4>
            <h5>mg919889@gmail.com</h5>
            <a href="mailto:mg919889@gmail.com">Send Email</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-Icon'/>
            <h4>LinkedIn</h4>
            <h5>Mayank Gupta</h5>
            <a href="https://www.linkedin.com/in/mayank-gupta-7570a4249/">Let's Get Connected</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-Icon'/>
            <h4>WhatsApp</h4>
            <h5>6387801627</h5>
            <a href="https://api.whatsapp.com/send?phone=6387801627">Send Message</a>
          </article>
        </div>
      <form ref={form} onSubmit={sendEmail} action="">
        <input type="text" name='name' placeholder="Your Full name" required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="10" required placeholder="Your Message"></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
     </div>
    </section>
  );
}
