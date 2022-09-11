import React from 'react'
import Louvre from "../../Images/Louvre.jpg"
import "./about.css"

export default function About() {
  return (
    <section id='about'>
      <div className='aboutSection'>
        <div className='picDiv'>
          <img id="myPic" src={Louvre} alt="Man outside of the Louvre"></img>
        </div>
        <div className='aboutDiv'>
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, putent nostrum disputando cu pro. Ius modo maiorum cu, facilis ocurreret eu eos. Ei per vero error. Sed iudico causae eu, usu ea noster hendrerit. Eu labores ponderum iudicabit ius, ne vim utamur ocurreret. Ea sumo placerat has, ex ridens legendos vis.

            Eam id erant nonumy, mei ex delectus petentium scribentur, qui id probo animal adipisci. Ut vocibus indoctum sit, est brute nominati consectetuer no. Ei omittam disputationi concludaturque per, cum ex labores appareat. Eam maiestatis dissentiunt ut. At mel altera aperiri mandamus. Eam offendit scripserit te.</p>
        </div>
      </div>
    </section>
  )
}
