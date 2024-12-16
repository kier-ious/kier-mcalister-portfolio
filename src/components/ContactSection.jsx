import React from 'react';

const ContactSection = () => (
  <section id="contact">
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <img src="/assets/email.png" alt="Email icon" className="icon contact-icon email-icon" />
        <p><a href="mailto:kierstie.mcalister@atlasschool.com">kierstie.mcalister@atlasschool.com</a></p>
      </div>
      <div className="contact-info-container">
        <img src="/assets/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
        <p><a href="https://www.linkedin.com/in/kiermcalister/">LinkedIn</a></p>
      </div>
    </div>
  </section>
);

export default ContactSection;
