import React from 'react';
import profileImage from "../../assets/images/7294BEBE-0D1F-4373-A919-8924F5306D9F.jpg";

function About() {
  return (
    <section>
        <img src={profileImage} alt="profile"/>
      <h1 id="about">Hi, I'm Jaryd</h1>
      <p>I love to build web apps</p>
    </section>
  );
}

export default About;