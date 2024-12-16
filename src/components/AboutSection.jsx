import React from 'react';
import '../styles.css';

const AboutSection = () => (
  <section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      {/* Experience and Education */}
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img src="./assets/experience.png" alt="Experience icon" className="icon" />
            <h3>Experience</h3>
            <p>2 years <br />Full Stack Development</p>
          </div>
          <div className="details-container">
            <img src="./assets/education.png" alt="Education icon" className="icon" />
            <h3>Education</h3>
            <p>2 years <br />Full Stack Development</p>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="section__pic-container">
        <img src="./assets/profile-pic2.png" alt="Kier McAlister profile pic" className="about-pic" />
      </div>
      <div className="text-container">
        <p>
          Hello! I'm Kier McAlister, a recent graduate from
          at Atlas School in Tulsa. I just wrapped up my curriculum by
          completing an exciting capstone project alongside four other
          cohorts. Over the course of three weeks, we collaborated to design
          and develop a functional app. My passion for tech goes beyond
          writing code; it's about making a positive impact. I'm committed
          to promoting equity within the tech industry and continuously
          learning to stay up-to-date with new technologies and best
          practices. I believe technology should foster inclusivity, and
          I actively support platforms that reflect this value. Collaboration
          is at the core of my approach; I thrive in team environments, enjoying
          the exchange of ideas and working together to create meaningful
          solutions. I'm excited for the journey ahead and open to connecting
          with like-minded individuals who envision a more inclusive and
          equitable tech world. Let's discover the vast possibilities of
          Full Stack Engineering together!
        </p>
      </div>
    </div>
    <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#experience'} />
  </section>
);

export default AboutSection;
