import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
        At Agenda, we believe that productivity begins with simplicity. Our mission is to help 
        you organize your life and accomplish your goals with a hassle-free to-do management tool. 
        Our platform is built for everyone, from students juggling assignments to professionals 
        managing complex projects. Agenda ensures you stay on top of your responsibilities effortlessly. 
        We're committed to providing a seamless user experience with an intuitive interface that adapts 
        to your needs, whether you're planning daily errands or mapping out long-term projects. At TaskMaster, 
        your tasks are secure, easily accessible, and always in sync, empowering you to achieve more with less 
        stress. Join us on this journey to transform how you manage your time and unlock your true productivity potential.
        </p>
      </div>
    </div>
  );
};

export default About;
