import React from 'react'
import '/home/ragnar/Web/To Do App/ToDoApp2.0/to-do-app-2.0/src/Style.scss'
import { FaFacebook, FaInstagram, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className='footer-container'>
      <h2 style={{color: "black"}}>Contact Us</h2>
      <section className='icons-container'>
        <a href='https://www.facebook.com/profile.php?id=100014285222103' target='_blank'>
          <FaFacebook />
        </a>
        <a href='https://twitter.com/seyfab' target='_blank'>
          <FaTwitter />
        </a>
        <a href='https://www.instagram.com/seyf_mb/' target='_blank'>
          <FaInstagram />
        </a>
        <a href='mailto:seyfab@hotmail.fr'>
          <FaEnvelope />
        </a>
        <a href='https://github.com/Seyfab' target='_blank'>
          <FaGithub />
        </a>
      </section>
    </footer>
  )
}

export default Footer