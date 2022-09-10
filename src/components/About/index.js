import React from "react";
import selfie from "../../assets/images/selfie.jpg";
function About() {
  return (
    <section className='my-5'>
    <div className="center">
    <h1 id='about'>About Me</h1>
    </div>
    <div className="center">
    <img src={selfie} className="my-2" style={{ height: "25%", width: "25%" }} alt="Me" />
    </div>
    <div className='my-2'>
        <p className="center" >
          I am a new web developer. I live laugh love to code. 
          Can't wait to keep learning and improving my skills. 
          I am great at communication and problem-solving.
           Thank you for checking me out.
        </p>
      </div>
    </section>
  );
}

export default About;
