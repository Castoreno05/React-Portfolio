import React from 'react'
import Louvre from "../../Images/Louvre.jpg"
import "./about.css"

export default function About() {
  return (
    <section id='about'>
      <div className='aboutMe'>
        <div className='img-column'>
          <img id="myPic" src={Louvre} alt="Man outside of the Louvre"></img>
        </div>
        <div className='nine-columns main-col'></div>
      </div>
    </section>
  )
}
