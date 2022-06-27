import React from 'react'
import Footer from '../Home/Sections/Footer'
import Navbar from '../../navbar/Navbar'
import "./team.css"
import img from './img.jpg'

const Team = () => {
  return (
    <div>
      <Navbar/>
      <div className="boy">
      <div className="card">
    <div className="imgBx">
      <img src={img} alt="" />
    </div>
    <h2 className="profile-name">Rotimi Damilare</h2>
    <small className="user-handle">@james_ford</small>
    <div className="profile-actions">
      <button className="btn btn-primary">Follow</button>
      <button className="btn btn-icon">
        <i className="ph-export"></i>
      </button>
    </div>
  </div>
  </div>

      <Footer/>
    </div>
  )
}

export default Team
