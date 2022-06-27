import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../Home/Sections/Footer'
import './upl.css'
import './up'
import { useState } from 'react'

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  return (
    <>
    <div>
      <Navbar/>
      <div className="body">
      <div className="container">
    <h2 className="title">Get In Touch</h2>
    <form method="POST" action="https://formsubmit.co/damilarerotimi29@gmail.com" enctype="multipart/form-data">
      <div className="input-field username">
        <input type="text" id="username" name="username" placeholder="Username"/>
      </div>
      <div className="input-field subject">
        <input type="text" id="subject" name="subject" placeholder="Subject"/>
      </div>
      <div className="input-field">
        <input type="email" id="email" name="email" placeholder="Email"/>
      </div>
      <input type="file" id='file' name="attachment" onChange={imageChange} accept="image/png, image/jpeg, image/jpg" />
      <div className="input-field">
      {selectedImage && (
        <>
        
        <img src={URL.createObjectURL(selectedImage)} width='300px' height={200}/>
        <button className="btn" onClick={removeSelectedImage}> Remove This Image</button>
        </>
      )}
      </div>
      <div className="input-field">
        <textarea name="message" className="massage" placeholder="Type message here"></textarea>
      </div>
      <input type="hidden" name="_captcha" value="false"></input>
      <button type="submit" className="btn">SEND MESSAGE</button>
    </form>
  </div>
  </div>
      <Footer/>
    </div>
    </>
  )
}

export default Upload