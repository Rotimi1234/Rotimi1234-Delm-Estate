import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../Home/Sections/Footer'
import './contact.css'

const Contact = () => {
  return (
    <main>
      <Navbar/>
      <div className="body">
      <div className="container">
    <h2 className="title">Get In Touch</h2>
    <form action="#">
      <div className="input-field username">
        <input type="text" id="username" name="username" placeholder="Username"/>
      </div>
      <div className="input-field subject">
        <input type="text" id="subject" name="subject" placeholder="Subject"/>
      </div>
      <div className="input-field">
        <input type="email" id="email" name="email" placeholder="Email"/>
      </div>
      <div className="input-field">
        <textarea name="message" className="massage" placeholder="Type message here"></textarea>
      </div>
      <button type="submit" className="btn">SEND MESSAGE</button>
    </form>
  </div>
  </div>
      <Footer/>
    </main>
  )
}

export default Contact
