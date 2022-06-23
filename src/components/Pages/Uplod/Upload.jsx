import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../Home/Sections/Footer'
import './upl.css'

const Upload = () => {
  return (
    <div>
      <Navbar/>
      <div class="wrapper">
         <div class="input-data">
      <form method="POST" action="https://formsubmit.co/damilarerotimi29@gmail.com" enctype="multipart/form-data">
        
      <input type="name" name="name" placeholder="Your Name" />
      <input type="email" name="email" placeholder="Your email" />

    <textarea  name="message" placeholder="Details of your problem"></textarea>
 

    
    <label className='custom-button' htmlFor="file">Choose Images for the building</label>
    <input multiple hidden  type="file" className='custom-button' id='file' name="attachment" accept="image/png, image/jpeg" />
    <button className='custom-button' type="submit">Send Test</button>
        </form>
        </div>
        </div>

      <Footer/>
    </div>
  )
}

export default Upload
